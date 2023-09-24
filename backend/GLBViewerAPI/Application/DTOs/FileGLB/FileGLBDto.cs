using GLBViewerAPI.Application.DTOs.Usuario;

namespace GLBViewerAPI.Application.DTOs.FileGLB;

public class FileGLBDto
{
    public int Id { get; set; }
    public int UsuarioId { get; set; }
    public string Nome { get; set; } = null!;
    public string Url { get; set; } = null!;
    public UsuarioDto Usuario { get; set; } = null!;
}