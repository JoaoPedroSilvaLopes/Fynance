using System.Net;
using System.Reflection;
using GLBViewerAPI.Application.Contracts;
using GLBViewerAPI.Application.Notifications;
using GLBViewerAPI.Application.Services;
using GLBViewerAPI.Core;
using GLBViewerAPI.Core.Enums;
using GLBViewerAPI.Core.Extensions;
using GLBViewerAPI.Core.Settings;
using GLBViewerAPI.Infra;
using GLBViewerAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.FileProviders;
using ScottBrady91.AspNetCore.Identity;

namespace GLBViewerAPI.Application;

public static class DependecyInjection
{
    public static void SetupSettings(this IServiceCollection services, IConfiguration configuration)
    {
        services.Configure<AppSettings>(configuration.GetSection("AppSettings"));
        services.Configure<JwtSettings>(configuration.GetSection("JwtSettings"));
        services.Configure<UploadSettings>(configuration.GetSection("UploadSettings"));
    }
    
    public static void ConfigureApplication(this IServiceCollection services, IConfiguration configuration)
    {
        services.ConfigureDbContext(configuration);
        
        services.AddRepositories();

        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        
        AplicarServices(services);
    }

    private static void AplicarServices(this IServiceCollection services)
    {
        services
            .AddScoped<INotificator, Notificator>()
            .AddScoped<IPasswordHasher<Usuario>, Argon2PasswordHasher<Usuario>>();

        services
            .AddScoped<IUsuarioService, UsuarioService>()
            .AddScoped<IAuthService, AuthService>()
            .AddScoped<IFileGLBService, FileGlbService>()
            .AddScoped<IFileService, FileService>();
    }
    
    public static void UseStaticFileConfiguration(this IApplicationBuilder app, IConfiguration configuration)
    {
        var uploadSettings = configuration.GetSection("UploadSettings");
        var publicBasePath = uploadSettings.GetValue<string>("PublicBasePath");
        var privateBasePath = uploadSettings.GetValue<string>("PrivateBasePath");
    
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(publicBasePath),
            RequestPath = $"/{EPathAccess.Public.ToDescriptionString()}"
        });
    
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(privateBasePath),
            RequestPath = $"/{EPathAccess.Private.ToDescriptionString()}",
            OnPrepareResponse = ctx =>
            {
                // respond HTTP 401 Unauthorized.
                ctx.Context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                ctx.Context.Response.ContentLength = 0;
                ctx.Context.Response.Body = Stream.Null;
                ctx.Context.Response.Headers.Add("Cache-Control", "no-store");
            }
        });
    }
}