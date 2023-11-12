using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    /*[Required]
    //[RegularExpression("(?=.*\\d)(?=.*[a-z])(?=/*[A-Z]).{4,8}$", ErrorMessage = "Password must be complex")]
    public int Password { get; set; }
    public int DisplayName { get; set; }*/
    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
}