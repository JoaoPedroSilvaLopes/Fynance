using GLBViewerAPI.Domain.Models;
using System.Linq.Expressions;

namespace GLBViewerAPI.Domain.Contracts.Repositories
{
    // IDisposable é referencia ao garbage collector
    public interface IRepository<T> : IDisposable where T : Entity, IAggregateRoot
    {
        public IUnityOfWork UnityOfWork { get; }

        public Task<T?> FirstOrDefault(Expression<Func<T, bool>> expression);
    }
}
