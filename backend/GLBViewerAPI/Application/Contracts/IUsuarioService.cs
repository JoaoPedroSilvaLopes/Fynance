using GLBViewerAPI.Application.DTOs.Usuario;

namespace GLBViewerAPI.Application.Contracts;

public interface IUsuarioService
{
    Task<UsuarioDto?> Adicionar(AdicionarUsuarioDto usuarioDto);
    Task<UsuarioDto?> ObterPorId(int id);
    Task<UsuarioDto?> Atualizar(int id, AtualizarUsuarioDto usuarioDto);
    Task Remover(int id);
}