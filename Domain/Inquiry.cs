namespace Domain;
public class Inquiry
{
    public Guid Id { get; set; }
    public float Width { get; set; }
    public float Height { get; set; }
    public int Weight { get; set; }
    public DateOnly Date { get; set; }
    public Address SourceAddress { get; set; }
    public Address DestinationAddress { get; set; }
    public string priority { get; set; }
    public bool DeliveredOnWeekend { get; set; }
}