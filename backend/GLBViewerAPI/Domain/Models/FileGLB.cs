using FluentValidation.Results;
using GLBViewerAPI.Domain.Contracts;
using GLBViewerAPI.Domain.Validators;
using GLBViewerAPI.Models;

namespace GLBViewerAPI.Domain.Models
{
    public class FileGLB : Entity, IAggregateRoot
    {
        public int UsuarioId { get; set; }
        public string Nome { get; set; } = null!;
        public string Url { get; set; } = null!;
        public Usuario Usuario { get; set; } = null!;
        
        public override bool Validar(out ValidationResult validationResult)
        {
            validationResult = new FileGLBValidator().Validate(this);
            return validationResult.IsValid;
        }
    }
}