using Microsoft.EntityFrameworkCore;

namespace GLBViewerAPI.Infra.Contexts
{
    public sealed class ApplicationDbContext : BaseApplicationDbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
