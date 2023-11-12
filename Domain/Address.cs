namespace Domain;

public class Address
{
    public Guid Id { get; set; }
    public string StreetName { get; set; }
    public int StreetNo { get; set; }
    public int? FlatNo { get; set; }
    public string ZipCode { get; set; }
    public string City { get; set; }
}