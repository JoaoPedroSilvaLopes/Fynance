using GLBViewerAPI.Models;

namespace GLBViewerAPI.Domain.Contracts.Repositories
{
    public interface IUsuarioRepository : IRepository<Usuario>
    {
        void Adicionar(Usuario usuario);
        void Atualizar(Usuario usuario);
        void Remover(Usuario usuario);
        Task<Usuario?> ObterPorId(int id);
        Task<Usuario?> ObterPorEmail(string email);
    }
}
