using GLBViewerAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GLBViewerAPI.Data
{
    public class MinimalContextDb : DbContext
    {
        public MinimalContextDb(DbContextOptions<MinimalContextDb> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<Usuario>()
                .Property(p => p.Nome)
                .IsRequired()
                .HasColumnType("varchar(200)");

            modelBuilder.Entity<Usuario>()
                .Property(p => p.Email)
                .IsRequired()
                .HasColumnType("varchar(200)");

            modelBuilder.Entity<Usuario>()
                .ToTable("Usuarios");

            base.OnModelCreating(modelBuilder);
        }
    }
}
