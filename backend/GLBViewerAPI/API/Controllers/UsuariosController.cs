using GLBViewerAPI.Application.Contracts;
using GLBViewerAPI.Application.DTOs.Usuario;
using GLBViewerAPI.Application.Notifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace GLBViewerAPI.API.Controllers;

[Route("/[controller]")]
public class UsuariosController : BaseController
{
    private readonly IUsuarioService _usuarioService;

    public UsuariosController(INotificator notificator, IUsuarioService usuarioService) : base(notificator)
    {
        _usuarioService = usuarioService;
    }

    [AllowAnonymous]
    [HttpPost]
    [SwaggerOperation(Summary = "Cadastro de um Usuário", Tags = new[] { "GLBViewer - Usuário" })]
    [ProducesResponseType(typeof(UsuarioDto), StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Adicionar([FromForm] AdicionarUsuarioDto dto)
    {
        return OkResponse(await _usuarioService.Adicionar(dto));
    }

    [HttpGet("{id}")]
    [SwaggerOperation(Summary = "Obter um Usuário", Tags = new[] { "GLBViewer - Usuário" })]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> ObterPorId(int id)
    {
        return OkResponse(await _usuarioService.ObterPorId(id));
    }

    [HttpPut("{id}")]
    [SwaggerOperation(Summary = "Atualizar um Usuário", Tags = new[] { "GLBViewer - Usuário" })]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    public async Task<IActionResult> Update(int id, [FromForm] AtualizarUsuarioDto dto)
    {
        return OkResponse(await _usuarioService.Atualizar(id, dto));
    }

    [HttpDelete]
    [SwaggerOperation(Summary = "Remover um Usuário", Tags = new[] { "GLBViewer - Usuário" })]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status403Forbidden)]
    public async Task<IActionResult> Remover(int id)
    {
        await _usuarioService.Remover(id);
        return NoContentResponse();
    }
}