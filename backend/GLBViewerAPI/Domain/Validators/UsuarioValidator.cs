using FluentValidation;
using GLBViewerAPI.Models;

namespace GLBViewerAPI.Domain.Validators
{
    public class UsuarioValidator : AbstractValidator<Usuario>
    {
        public UsuarioValidator()
        {
            RuleFor(u => u.Nome)
                .NotEmpty()
                .WithMessage("Nome não pode ser vazio")
                .Length(3, 150)
                .WithMessage("Nome tem que ter no mínimo 3 e no máximo 150 caracteres");

            RuleFor(u => u.Email)
                .EmailAddress();

            RuleFor(u => u.Senha)
                .NotEmpty()
                .WithMessage("Senha não pode ser vazio")
                .MinimumLength(8)
                .WithMessage("Senha deve ter no mínimo 8 caracteres")
                .MaximumLength(20)
                .WithMessage("Senha deve ter no máximo 20 caracteres");
        }
    }
}
