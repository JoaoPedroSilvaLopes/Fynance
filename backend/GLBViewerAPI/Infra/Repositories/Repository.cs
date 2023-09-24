

using GLBViewerAPI.Domain.Contracts;
using GLBViewerAPI.Domain.Contracts.Repositories;
using GLBViewerAPI.Domain.Models;
using GLBViewerAPI.Infra.Contexts;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace GLBViewerAPI.Infra.Repositories

{
    public class Repository<T> : IRepository<T> where T : Entity, IAggregateRoot
    {
        private bool _isDisposed;
        private readonly DbSet<T> _dbSet;
        protected readonly BaseApplicationDbContext Context;

        protected Repository(BaseApplicationDbContext context)
        {
            Context = context;
            _dbSet = context.Set<T>();
        }
        
        // Consultar se um dado já existe
        public async Task<T?> FirstOrDefault(Expression<Func<T, bool>> expression)
        {
            return await _dbSet.AsNoTrackingWithIdentityResolution().Where(expression).FirstOrDefaultAsync();
        }

        public IUnityOfWork UnityOfWork => Context;

        // Garantir a chamada do garbage collector
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        // Garantir a chamada do garbage collector
        protected virtual void Dispose(bool disposing)
        {
            if (_isDisposed) return;

            if (disposing) Context.Dispose();

            _isDisposed = true;
        }
    }
}
