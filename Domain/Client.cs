using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;

namespace Domain;

public class Client
{
    public Guid Id { get; set; }
    public required string Email { get; set; }
    public required string FirstName { get; set; }
    public required string LastName { get; set;}
    //public string? Sub { get; set; }
    public Address? Addr { get; set; }
    public Address? SourceAddr { get; set; }
}