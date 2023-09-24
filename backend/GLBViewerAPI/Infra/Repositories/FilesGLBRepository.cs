using GLBViewerAPI.Domain.Contracts.Repositories;
using GLBViewerAPI.Domain.Models;
using GLBViewerAPI.Infra.Contexts;
using Microsoft.EntityFrameworkCore;

namespace GLBViewerAPI.Infra.Repositories;

public class FilesGLBRepository : Repository<FileGLB>, IFileGLBRespository
{
    public FilesGLBRepository(BaseApplicationDbContext context) : base(context)
    {
    }
    
    public void Adicionar(FileGLB fileGlb)
    {
        Context.FilesGlb.Add(fileGlb);
    }
    
    public void Remover(FileGLB fileGlb)
    {
        Context.FilesGlb.Remove(fileGlb);
    }

    public async Task<FileGLB> ObterPorId(int id)
    {
        return await Context.FilesGlb
            .Include(f => f.Usuario)
            .FirstOrDefaultAsync(f => f.Id == id);
    }
}