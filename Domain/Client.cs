using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;

namespace Domain;

// public class Client
// {
//     public int Id { get; set; }
//     public string FirstName { get; set; }
//     public string LastName { get; set; }
//     public string Email { get; set; }
//     public string Login { get; set; }
//     public string Password { get; set; }
//     public int AddressId { get; set; }
//     public Address Address { get; set; }
// }

public class Client
{
    public int Id { get; set; }
    public /*required*/ string FirstName { get; set; }
    public /*required*/ string LastName { get; set;}
    public /*required*/ string Email { get; set; }

    public string Sub { get; set; }
    public int AddressId { get; set; }
    public int SourceAddressId { get; set; }
    
    public Address? Address { get; set; }
    public Address? SourceAddress { get; set; }
    
    //public List<Order>? orders;
    //public List<Inquiry>? inquires;
}