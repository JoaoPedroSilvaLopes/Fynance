using GLBViewerAPI.Application.Contracts;
using GLBViewerAPI.Application.DTOs.Auth;
using GLBViewerAPI.Application.DTOs.Usuario;
using GLBViewerAPI.Application.Notifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace GLBViewerAPI.API.Controllers;

[AllowAnonymous]
[Route("auth/[controller]")]
public class UsuariosAuthController : BaseController
{
    private readonly IAuthService _authService;
    
    public UsuariosAuthController(INotificator notificator, IAuthService authService) : base(notificator)
    {
        _authService = authService;
    }
    
    [HttpPost]
    [SwaggerOperation(Summary = "Autenticar Usuário", Tags = new[] { "GLBViewer - Autenticação" })]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Login([FromBody]UsuarioLoginDto dto)
    {
        var usuario = await _authService.Login(dto);
        return usuario != null ? OkResponse(usuario) : Unauthorized(new[] { "Usuário e/ou senha incorretos" });
    }
}