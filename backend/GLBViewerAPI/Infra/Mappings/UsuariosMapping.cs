using GLBViewerAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GLBViewerAPI.Infra.Mappings
{
    public class UsuariosMapping : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.Property(u => u.Nome).HasMaxLength(150);

            builder.Property(u => u.Email).HasMaxLength(150);

            builder.Property(u => u.Senha).HasMaxLength(255);
        }
    }
}
