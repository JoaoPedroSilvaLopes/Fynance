using GLBViewerAPI.Application.DTOs.FileGLB;

namespace GLBViewerAPI.Application.Contracts;

public interface IFileGLBService
{
    Task<FileGLBDto?> Adicionar(AdicionarFileGLBDto fileGlbDto);
    Task<FileGLBDto?> ObterPorId(int id);
    Task Remover(int id);
    Task<List<FileGLBDto>> ObterTodos();
}