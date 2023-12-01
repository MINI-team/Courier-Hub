namespace API.DTOs;

public class ClientDto // what we want to send back when client successfully logged in
{ 
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Token { get; set; }
}