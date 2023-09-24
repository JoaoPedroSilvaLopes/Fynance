using GLBViewerAPI.Domain.Contracts.Repositories;
using GLBViewerAPI.Infra.Contexts;
using GLBViewerAPI.Infra.Repositories;
using Microsoft.EntityFrameworkCore;

namespace GLBViewerAPI.Infra
{
    public static class DependecyInjection
    {
        public static void ConfigureDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                var connectionString = configuration.GetConnectionString("DefaultConnection");
                var serverVersion = ServerVersion.AutoDetect(connectionString);
                options.UseMySql(connectionString, serverVersion);
                options.EnableDetailedErrors();
                options.EnableSensitiveDataLogging();
            });

            services.AddScoped<BaseApplicationDbContext>(serviceProvider =>
            {
                return serviceProvider.GetRequiredService<ApplicationDbContext>();
            });
        }

        public static void AddRepositories(this IServiceCollection services)
        {
            services
                .AddScoped<IUsuarioRepository, UsuarioRepository>()
                .AddScoped<IFileGLBRespository, FilesGLBRepository>();
        }
    }
}
