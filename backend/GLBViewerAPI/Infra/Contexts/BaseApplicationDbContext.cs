using FluentValidation.Results;
using GLBViewerAPI.Domain.Contracts;
using GLBViewerAPI.Infra.Extensions;
using GLBViewerAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using GLBViewerAPI.Domain.Models;

namespace GLBViewerAPI.Infra.Contexts
{
    public abstract class BaseApplicationDbContext : DbContext, IUnityOfWork
    {
        protected BaseApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; } = null!;
        public DbSet<FileGLB> FilesGlb { get; set; } = null!;

        public async Task<bool> Commit() => await SaveChangesAsync() > 0;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            ApplyConfigurations(modelBuilder);
            base.OnModelCreating(modelBuilder);
        }

        private static void ApplyConfigurations(ModelBuilder modelBuilder)
        {
            modelBuilder.Ignore<ValidationResult>();
            modelBuilder.ApplyEntityConfiguration();
        }
    }
}
