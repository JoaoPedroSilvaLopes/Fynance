using GLBViewerAPI.Application.Contracts;
using GLBViewerAPI.Application.DTOs.FileGLB;
using GLBViewerAPI.Application.DTOs.Usuario;
using GLBViewerAPI.Application.Notifications;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace GLBViewerAPI.API.Controllers;

[Route("modelo-glb/[controller]")]
public class FileGLBController : BaseController
{
    private readonly IFileGLBService _fileGlbService;
    
    public FileGLBController(INotificator notificator, IFileGLBService fileGlbService) : base(notificator)
    {
        _fileGlbService = fileGlbService;
    }
    
    [HttpPost]
    [SwaggerOperation(Summary = "Cadastro de um Modelo GLB", Tags = new[] { "GLBViewer - Modelo GLB" })]
    [ProducesResponseType(typeof(UsuarioDto), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Adicionar([FromForm] AdicionarFileGLBDto dto)
    {
        return OkResponse(await _fileGlbService.Adicionar(dto));
    }

    [HttpGet("{id}")]
    [SwaggerOperation(Summary = "Obter um Modelo GLB", Tags = new[] { "GLBViewer - Modelo GLB" })]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> ObterPorId(int id)
    {
        return OkResponse(await _fileGlbService.ObterPorId(id));
    }
    
    [HttpGet("/modelos-usuarios")]
    [SwaggerOperation(Summary = "Obter Modelos GLB de um usuário", Tags = new[] { "GLBViewer - Modelo GLB" })]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> ObterTodos()
    {
        return OkResponse(await _fileGlbService.ObterTodos());
    }

    [HttpDelete("{id}")]
    [SwaggerOperation(Summary = "Remover um Modelo GLB", Tags = new[] { "GLBViewer - Modelo GLB" })]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    public async Task<IActionResult> Remover(int id)
    {
        await _fileGlbService.Remover(id);
        return NoContentResponse();
    }
}