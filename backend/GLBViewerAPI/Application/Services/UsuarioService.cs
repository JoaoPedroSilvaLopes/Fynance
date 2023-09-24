using AutoMapper;
using GLBViewerAPI.Application.Contracts;
using GLBViewerAPI.Application.DTOs.Usuario;
using GLBViewerAPI.Application.Notifications;
using GLBViewerAPI.Domain.Contracts.Repositories;
using GLBViewerAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace GLBViewerAPI.Application.Services;

public class UsuarioService : BaseService, IUsuarioService
{
    private readonly IUsuarioRepository _usuarioRepository;
    private readonly IPasswordHasher<Usuario> _passwordHasher;

    public UsuarioService(INotificator notificator, IMapper mapper, IUsuarioRepository usuarioRepository,
        IPasswordHasher<Usuario> passwordHasher) : base(
        notificator, mapper)
    {
        _usuarioRepository = usuarioRepository;
        _passwordHasher = passwordHasher;
    }

    public async Task<UsuarioDto?> Adicionar(AdicionarUsuarioDto usuarioDto)
    {
        var usuario = Mapper.Map<Usuario>(usuarioDto);

        if (!await Validate(usuario)) return null;

        usuario.Senha = _passwordHasher.HashPassword(usuario, usuario.Senha);
        _usuarioRepository.Adicionar(usuario);

        if (await _usuarioRepository.UnityOfWork.Commit())
            return Mapper.Map<UsuarioDto>(usuario);
        
        Notificator.Handle("Não foi possível cadastrar o usuário.");
        return null;
    }

    public async Task<UsuarioDto?> ObterPorId(int id)
    {
        var usuario = await _usuarioRepository.ObterPorId(id);
        
        if (usuario != null)
            return Mapper.Map<UsuarioDto>(usuario);

        Notificator.HandleNotFoundResourse();
        return null;
    }

    public async Task<UsuarioDto?> Atualizar(int id, AtualizarUsuarioDto usuarioDto)
    {
        if (id != usuarioDto.Id)
        {
            Notificator.Handle("Os ids não conferem!");
            return null;
        }
        
        var usuario = await _usuarioRepository.ObterPorId(id);
        
        if (usuario == null)
        {
            Notificator.HandleNotFoundResourse();
            return null;
        }
        
        Mapper.Map(usuarioDto, usuario);
        
        if (!await Validate(usuario)) return null;
        
        usuario.Senha = _passwordHasher.HashPassword(usuario, usuario.Senha);
        _usuarioRepository.Atualizar(usuario);
        if (await _usuarioRepository.UnityOfWork.Commit())
            return Mapper.Map<UsuarioDto>(usuario);
        
        Notificator.Handle("Não foi possível alterar o usuário");
        return null;
    }

    public async Task Remover(int id)
    {
        var usuario = await _usuarioRepository.ObterPorId(id);

        if (usuario == null)
        {
            Notificator.HandleNotFoundResourse();
            return;
        }

        _usuarioRepository.Remover(usuario);

        if (!await _usuarioRepository.UnityOfWork.Commit())
        {
            Notificator.Handle("Não foi possível remover o usuário");
        }
    }

    private async Task<bool> Validate(Usuario usuario)
    {
        if (!usuario.Validar(out var validationResult))
            Notificator.Handle(validationResult.Errors);

        var usuarioExistente =
            await _usuarioRepository.FirstOrDefault(u => u.Id != usuario.Id && u.Email == usuario.Email);

        if (usuarioExistente != null)
            Notificator.Handle("Já existe um usuário cadastro com essas informações!");

        return !Notificator.HasNotification;
    }
}