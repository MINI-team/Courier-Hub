using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;

namespace Domain;

public class Client
{
    public int Id { get; set; }
    public /*required*/ string FirstName { get; set; }
    public /*required*/ string LastName { get; set;}
    public /*required*/ string Email { get; set; }

    public string Sub { get; set; }
    public int AddressId { get; set; }
    public int SourceAddressId { get; set; }

    //public string? Sub { get; set; }
    public Address? Addr { get; set; }
    public Address? SourceAddr { get; set; }
    //public List<Order>? orders;
    //public List<Inquiry>? inquires;
}