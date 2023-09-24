using GLBViewerAPI.Domain.Contracts;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore;

namespace GLBViewerAPI.Infra.Extensions
{
    public static class ModelBuilderExtension
    {
        /* Verifica se tal entidade herda de IEntity e 
         * verifica se existe uma propriedade ID e setta como chave primaria */
        public static void ApplyEntityConfiguration(this ModelBuilder modelBuilder)
        {
            var entities = modelBuilder.GetEntities<IEntity>();
            var props = entities.SelectMany(c => c.GetProperties()).ToList();

            foreach (var property in props.Where(c => c.ClrType == typeof(int) && c.Name == "Id"))
            {
                property.IsKey();
            }
        }

        /* Captura a entidade que herda de IEntity */
        private static List<IMutableEntityType> GetEntities<T>(this ModelBuilder modelBuilder)
        {
            var entities = modelBuilder.Model.GetEntityTypes()
                .Where(c => c.ClrType.GetInterface(typeof(T).Name) != null).ToList();

            return entities;
        }
    }
}
