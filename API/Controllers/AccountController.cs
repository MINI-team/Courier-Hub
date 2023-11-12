using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

/*[ApiController]
[Route("account/[controller]")]*/
public class AccountController : BaseApiController
{
    //private readonly TokenService _tokenService;
    private readonly DataContext _context;
    //private readonly UserManager<Client> _userManager;
    /*
    public AccountController(TokenService tokenService)
    {
        _tokenService = tokenService;
    }
    */
    public AccountController(DataContext context)
    {
        _context = context;
    }

    //[AllowAnonymous]
    [HttpPost("login")]
    public async Task<ActionResult<ClientDto>> Login(LoginDto loginDto)
    {
        /*var user = new Client()
        {
            Email = loginDto.Email,
        }; // Replace this with your logic to find the user
        if (user != null)
        {
            // Return a ClientDto with the necessary information
            return  new ClientDto
            {
                Email = user.Email,
                //DisplayName = user.FirstName,
                //Token = _tokenService.CreateToken(user),
                //Username = user.LastName
            };
        }*/

        return Unauthorized();
    }

    //[AllowAnonymous]
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
            };
        

        //return BadRequest("Problem registering user");
    }

    /*[HttpGet]
    public async Task<ActionResult<ClientDto>> GetCurrentUser()
    {
        var client = await_userManager.FindByEmailAsync(); 
    }*/
}