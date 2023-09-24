using AutoMapper;
using GLBViewerAPI.Application.DTOs.Usuario;
using GLBViewerAPI.Models;

namespace GLBViewerAPI.Application.Configurations;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Usuario, UsuarioDto>().ReverseMap();
        CreateMap<Usuario, AdicionarUsuarioDto>().ReverseMap();
        CreateMap<Usuario, AtualizarUsuarioDto>().ReverseMap();
    }
}