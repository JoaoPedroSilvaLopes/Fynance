using System.Security.Claims;
using AutoMapper;
using GLBViewerAPI.Application.Contracts;
using GLBViewerAPI.Application.DTOs.FileGLB;
using GLBViewerAPI.Application.Notifications;
using GLBViewerAPI.Core.Enums;
using GLBViewerAPI.Domain.Contracts.Repositories;
using GLBViewerAPI.Domain.Models;

namespace GLBViewerAPI.Application.Services;

public class FileGlbService : BaseService, IFileGLBService
{
    private readonly IFileGLBRespository _fileGlbRespository;
    private readonly IFileService _fileService;
    private readonly IHttpContextAccessor _contextAccessor;

    public FileGlbService(INotificator notificator, IMapper mapper, IFileGLBRespository fileGlbRespository,
        IHttpContextAccessor contextAccessor, IFileService fileService) : base(
        notificator, mapper)
    {
        _fileGlbRespository = fileGlbRespository;
        _contextAccessor = contextAccessor;
        _fileService = fileService;
    }

    public async Task<FileGLBDto?> Adicionar(AdicionarFileGLBDto fileGlbDto)
    {
        if (fileGlbDto.Arquivo == null)
        {
            Notificator.Handle("Não foi enviado um arquivo");
            return null;
        }

        if (!fileGlbDto.Arquivo.FileName.EndsWith(".glb"))
        {
            Notificator.Handle("Só é aceito arquivos com a extensão .glb");
            return null;
        }

        var url = await _fileService.Upload(
            fileGlbDto.Arquivo,
            EUploadPath.ArquivosUsuario,
            EPathAccess.Public
        );

        if (url == null)
        {
            Notificator.Handle("Não foi possível fazer o upload do arquivo");
            return null;
        }

        var fileGlb = new FileGLB
        {
            Nome = fileGlbDto.Arquivo.Name,
            UsuarioId = ObterIdUsuario(),
            Url = url
        };

        _fileGlbRespository.Adicionar(fileGlb);

        if (await _fileGlbRespository.UnityOfWork.Commit())
            return Mapper.Map<FileGLBDto>(fileGlb);

        Notificator.Handle("Não foi possível adicionar o arquivo GLB.");
        return null;
    }

    public async Task<FileGLBDto> ObterPorId(int id)
    {
        var fileGlb = await _fileGlbRespository.ObterPorId(id);

        if (fileGlb != null)
            return Mapper.Map<FileGLBDto>(fileGlb);

        Notificator.HandleNotFoundResourse();
        return null;
    }

    public async Task Remover(int id)
    {
        var fileGlb = await _fileGlbRespository.ObterPorId(id);

        if (fileGlb == null)
        {
            Notificator.HandleNotFoundResourse();
            return;
        }

        _fileGlbRespository.Remover(fileGlb);

        if (!await _fileGlbRespository.UnityOfWork.Commit())
        {
            Notificator.Handle("Não foi possível remover o arquivo");
        }
    }

    public async Task<List<FileGLBDto>> ObterTodos()
    {
        return Mapper.Map<List<FileGLBDto>>(await _fileGlbRespository.ObterTodos(ObterIdUsuario()));
    }

    private int ObterIdUsuario()
    {
        var Id = _contextAccessor?
            .HttpContext?
            .User
            .Claims
            .FirstOrDefault(u => u.Type == "Id");


        return Convert.ToInt32(Id.Value);
    }
}