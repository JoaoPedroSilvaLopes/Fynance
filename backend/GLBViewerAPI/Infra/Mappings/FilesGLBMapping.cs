using GLBViewerAPI.Domain.Models;
using GLBViewerAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GLBViewerAPI.Infra.Mappings;

public class FilesGLBMapping : IEntityTypeConfiguration<FileGLB>
{
    public void Configure(EntityTypeBuilder<FileGLB> builder)
    {
        builder.Property(f => f.Nome).HasMaxLength(150);

        builder.Property(f => f.Url).HasMaxLength(200);

        builder.HasOne(f => f.Usuario)
            .WithMany(u => u.FilesGLB)
            .HasForeignKey(f => f.UsuarioId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}