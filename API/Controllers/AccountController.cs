using System.Runtime.InteropServices.JavaScript;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

[AllowAnonymous]
[ApiController]
[Route("api/[controller]")]
public class AccountController /* : BaseApiController*/ : ControllerBase
{
    private readonly DataContext _context;
    private readonly TokenService _tokenService;

    private Client[] ArrClients = new Client[]
    {
        new Client
        {
            FirstName = "Vlada",
            LastName = "Gromova",
            Email = "vladagromova1106@gmail.com",
        },
        new Client
        {
            FirstName = "Marysia",
            LastName = "Gwiazda",
            Email = "marysiagwiazda0@gmail.com",
        }
    };

    public AccountController(DataContext context, TokenService tokenService)
    {
        _context = context;
        _tokenService = tokenService;
    }

    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<ActionResult<ClientDto>> Login(LoginDto loginDto)
    {
        var client = ArrClients.FirstOrDefault(c => c.Email == loginDto.Email);
        //var client = await _context.Clients.FirstOrDefaultAsync(c => c.Email == loginDto.Email);
        if (client == null)
        {
            return Unauthorized();
        }

        return new ClientDto
        {
            FirstName = client.FirstName,
            LastName = client.LastName,
            Email = client.Email,
            //Token = _tokenService.CreateToken(client),
            Token = "123",
        };
    }

    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<ActionResult<ClientDto>> Register(RegisterDto registerDto)
    {
        if (await _context.Clients.AnyAsync(x => x.Email == registerDto.Email))
        {
            return BadRequest("Email is already taken");
        }

        Console.WriteLine("I'm going to create a Client!");
        var client = new Client
        {
            Email = registerDto.Email,
            FirstName = registerDto.FirstName,
            LastName = registerDto.LastName,

        };
        _context.Clients.Add(client);
        await _context.SaveChangesAsync();

        return new ClientDto()
        {
            FirstName = client.FirstName,
            LastName = client.LastName,
            Email = client.Email,
            Token = _tokenService.CreateToken(client)
        };
    }

    /*[HttpGet]
    public async Task<ActionResult<ClientDto>> GetCurrentUser()
    {
        var client = await _context.Clients.FirstOrDefaultAsync(x => x.Email == ClientDto.Email);
    }*/

}