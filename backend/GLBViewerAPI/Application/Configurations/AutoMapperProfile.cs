using AutoMapper;
using GLBViewerAPI.Application.DTOs.FileGLB;
using GLBViewerAPI.Application.DTOs.Usuario;
using GLBViewerAPI.Domain.Models;
using GLBViewerAPI.Models;

namespace GLBViewerAPI.Application.Configurations;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Usuario, UsuarioDto>().ReverseMap();
        CreateMap<Usuario, AdicionarUsuarioDto>().ReverseMap();
        CreateMap<Usuario, AtualizarUsuarioDto>().ReverseMap();
        CreateMap<FileGLB, AdicionarFileGLBDto>().ReverseMap();
        CreateMap<FileGLB, FileGLBDto>().ReverseMap();
    }
}