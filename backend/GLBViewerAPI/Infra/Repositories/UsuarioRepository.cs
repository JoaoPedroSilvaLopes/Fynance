using GLBViewerAPI.Domain.Contracts.Repositories;
using GLBViewerAPI.Infra.Contexts;
using GLBViewerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GLBViewerAPI.Infra.Repositories
{
    public class UsuarioRepository : Repository<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(BaseApplicationDbContext context) : base(context)
        {
        }

        public void Adicionar(Usuario usuario)
        {
            Context.Usuarios.Add(usuario);
        }

        public void Atualizar(Usuario usuario)
        {
            Context.Usuarios.Update(usuario);
        }

        public void Remover(Usuario usuario)
        {
            Context.Usuarios.Remove(usuario);
        }

        public async Task<Usuario> ObterPorId(int id)
        {
            return await Context.Usuarios.Include(u => u.FilesGLB).FirstOrDefaultAsync(u => u.Id == id);
        }
        
        public async Task<Usuario> ObterPorEmail(string email)
        {
            return await Context.Usuarios.FirstOrDefaultAsync(u => u.Email == email);
        }
    }
}
