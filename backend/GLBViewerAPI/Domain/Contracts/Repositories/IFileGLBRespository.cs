using GLBViewerAPI.Domain.Models;

namespace GLBViewerAPI.Domain.Contracts.Repositories;

public interface IFileGLBRespository : IRepository<FileGLB>
{
    void Adicionar(FileGLB fileGlb);
    void Remover(FileGLB fileGlb);
    Task<FileGLB> ObterPorId(int id);
}