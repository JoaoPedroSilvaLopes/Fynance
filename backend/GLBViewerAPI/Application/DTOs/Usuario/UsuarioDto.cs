using GLBViewerAPI.Application.DTOs.FileGLB;

namespace GLBViewerAPI.Application.DTOs.Usuario;

public class UsuarioDto
{
    public int Id { get; set; }
    public string Nome { get; set; } = null!;
    public string Email { get; set; } = null!;
    public List<FileGLBDto> FilesGLB = new();
}
