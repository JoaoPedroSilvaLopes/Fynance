using FluentValidation;
using GLBViewerAPI.Domain.Models;

namespace GLBViewerAPI.Domain.Validators;

public class FileGLBValidator : AbstractValidator<FileGLB>
{
    public FileGLBValidator()
    {
        RuleFor(u => u.Nome)
            .NotEmpty()
            .WithMessage("Nome não pode ser vazio")
            .Length(3, 150)
            .WithMessage("Nome tem que ter no mínimo 3 e no máximo 150 caracteres");
    }
}