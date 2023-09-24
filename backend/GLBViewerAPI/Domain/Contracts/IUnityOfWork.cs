namespace GLBViewerAPI.Domain.Contracts
{
    public interface IUnityOfWork
    {
        Task<bool> Commit();
    }
}
