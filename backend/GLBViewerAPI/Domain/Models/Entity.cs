using FluentValidation.Results;
using GLBViewerAPI.Domain.Contracts;

namespace GLBViewerAPI.Domain.Models
{
    public class Entity : IEntity
    {
        public int Id { get; set; }

        public virtual bool Validar(out ValidationResult validationResult)
        {
            validationResult = new ValidationResult();
            return validationResult.IsValid;
        }
    }
}
