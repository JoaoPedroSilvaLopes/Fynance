using MiniValidation;
using GLBViewerAPI.Data;
using GLBViewerAPI.Models;
using NetDevPack.Identity.Jwt;
using NetDevPack.Identity.Model;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

#region Configuração dos Serviços

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddDbContext<MinimalContextDb>
    (options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddIdentityEntityFrameworkContextConfiguration(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"),
    b => b.MigrationsAssembly("GLBViewerAPI"))
);

builder.Services.AddIdentityConfiguration();
builder.Services.AddJwtConfiguration(builder.Configuration, "AppSettings");
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "GLB Viewer API",
        Description = "Desenvolvido por João Pedro",
        Contact = new OpenApiContact { Name = "João Pedro Silva Lopes", Email = "joaopedroS.L@hotmail.com" },
        License = new OpenApiLicense { Name = "MIT", Url = new Uri("https://opensource.org/licenses/MIT") }
    });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "Insira o token JWT desta maneira: Bearer {seu token}",
        Name = "Authorization",
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
}
);
builder.Services.AddAuthorization();

var app = builder.Build();

#endregion

#region Configuração da Pipeline

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthConfiguration();
app.UseHttpsRedirection();

#endregion

#region EndPoints de Autenticação

app.MapPost("/autenticacao", [AllowAnonymous] async (
    SignInManager<IdentityUser> signInManager,
    UserManager<IdentityUser> userManager,
    IOptions<AppJwtSettings> appJwtSettings,
    RegisterUser registerUser
) =>
{
    if (registerUser == null) return Results.BadRequest("Usuário não informado.");

    if (!MiniValidator.TryValidate(registerUser, out var errors))
        return Results.ValidationProblem(errors);

    var user = new IdentityUser
    {
        UserName = registerUser.Email,
        Email = registerUser.Email,
        EmailConfirmed = true
    };

    var result = await userManager.CreateAsync(user, registerUser.Password);

    if (!result.Succeeded) return Results.BadRequest(result.Errors);

    var jwt = new JwtBuilder()
        .WithUserManager(userManager)
        .WithJwtSettings(appJwtSettings.Value)
        .WithEmail(user.Email)
        .WithJwtClaims()
        .WithUserClaims()
        .WithUserRoles()
        .BuildUserResponse();

    return Results.Ok(jwt);
})
.ProducesValidationProblem()
.Produces(StatusCodes.Status200OK)
.Produces(StatusCodes.Status400BadRequest)
.WithName("AutenticacaoUsuario")
.WithTags("Autenticacao");


app.MapPost("/login", [AllowAnonymous] async (
    SignInManager<IdentityUser> signInManager,
    UserManager<IdentityUser> userManager,
    IOptions<AppJwtSettings> appJwtSettings,
    LoginUser loginUser
) =>
{
    if (loginUser == null) return Results.BadRequest("Usuário não informado.");

    if (!MiniValidator.TryValidate(loginUser, out var errors))
        return Results.ValidationProblem(errors);

    var result = await signInManager.PasswordSignInAsync(loginUser.Email, loginUser.Password, false, true);

    if (result.IsLockedOut) return Results.BadRequest("Usuário bloquado");

    if (!result.Succeeded) return Results.BadRequest("Usuário ou senha inválidos");

    var jwt = new JwtBuilder()
        .WithUserManager(userManager)
        .WithJwtSettings(appJwtSettings.Value)
        .WithEmail(loginUser.Email)
        .WithJwtClaims()
        .WithUserClaims()
        .WithUserRoles()
        .BuildUserResponse();

    return Results.Ok(jwt);
})
.ProducesValidationProblem()
.Produces(StatusCodes.Status200OK)
.Produces(StatusCodes.Status400BadRequest)
.WithName("LoginUsuario")
.WithTags("Autenticacao");

#endregion

#region EndPoints de Usuário

app.MapGet("/Usuario", [Authorize] async (MinimalContextDb context) =>
{
    var result = await context.Usuarios.ToListAsync();
    return result;
})
.Produces<Usuario[]>(StatusCodes.Status200OK)
.Produces(StatusCodes.Status404NotFound)
.WithName("GetUsuario")
.WithTags("Usuario");


app.MapGet("/Usuario/{id}", [Authorize] async (MinimalContextDb context, Guid id) =>
{
    var result = await context.Usuarios.FindAsync(id);
    return result is Usuario usuario ? Results.Ok(usuario) : Results.NotFound();
})
.Produces<Usuario>(StatusCodes.Status200OK)
.Produces(StatusCodes.Status404NotFound)
.WithName("GetUsuarioById")
.WithTags("Usuario");


app.MapPost("/usuario", [Authorize] async (MinimalContextDb context, Usuario usuario) =>
{
    if (!MiniValidator.TryValidate(usuario, out var errors))
        return Results.ValidationProblem(errors);

    context.Usuarios.Add(usuario);
    var result = await context.SaveChangesAsync();

    return result > 0
        ? Results.CreatedAtRoute("GetUsuarioById", new { id = usuario.Id }, usuario)
        : Results.BadRequest("Houve um problema ao realizar o cadastro do usuário.");
})
.ProducesValidationProblem()
.Produces<Usuario>(StatusCodes.Status201Created)
.Produces(StatusCodes.Status400BadRequest)
.WithName("PostUsuario")
.WithTags("Usuario");


app.MapPut("/usuario/{id}", [Authorize] async (MinimalContextDb context, Guid id, Usuario usuario) =>
{
    var usuarioBanco = await context.Usuarios
        .AsNoTracking<Usuario>()
        .FirstOrDefaultAsync(u => u.Id == id);

    if (usuarioBanco == null) return Results.NotFound();

    if (!MiniValidator.TryValidate(usuario, out var errors))
        return Results.ValidationProblem(errors);

    context.Usuarios.Update(usuario);
    var result = await context.SaveChangesAsync();

    return result > 0
        ? Results.NoContent()
        : Results.BadRequest("Houve um problema ao atualizar o usuário.");
})
.ProducesValidationProblem()
.Produces(StatusCodes.Status204NoContent)
.Produces(StatusCodes.Status400BadRequest)
.WithName("PutUsuario")
.WithTags("Usuario");


app.MapDelete("/usuario/{id}", [Authorize] async (MinimalContextDb context, Guid id) =>
{
    var usuarioBanco = await context.Usuarios.FindAsync(id);
    if (usuarioBanco == null) return Results.NotFound();

    context.Usuarios.Remove(usuarioBanco);
    var result = await context.SaveChangesAsync();

    return result > 0
        ? Results.NoContent()
        : Results.BadRequest("Houve um problema ao remover o usuário.");
})
.ProducesValidationProblem()
.Produces(StatusCodes.Status204NoContent)
.Produces(StatusCodes.Status400BadRequest)
.WithName("DeleteUsuario")
.WithTags("Usuario");

#endregion

app.Run();
