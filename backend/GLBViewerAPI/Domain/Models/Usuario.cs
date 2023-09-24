using FluentValidation.Results;
using GLBViewerAPI.Domain.Validators;
using GLBViewerAPI.Domain.Contracts;
using GLBViewerAPI.Domain.Models;

namespace GLBViewerAPI.Models
{
    public class Usuario : Entity, IAggregateRoot
    {
        public int Id { get; set; }
        public string Nome { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Senha { get; set; } = null!;

        public override bool Validar(out ValidationResult validationResult)
        {
            validationResult = new UsuarioValidator().Validate(this);
            return validationResult.IsValid;
        }
    }
}
