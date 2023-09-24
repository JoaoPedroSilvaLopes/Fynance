using GLBViewerAPI.Application.DTOs.Auth;

namespace GLBViewerAPI.Application.Contracts;

public interface IAuthService
{
    Task<TokenDto?> Login(UsuarioLoginDto usuarioLoginDto);
}