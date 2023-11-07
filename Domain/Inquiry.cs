namespace Domain;
public class Inquiry
{
    public Guid Id { get; set; }
    public int Width { get; set; }
    public int Height { get; set; }
    public int Weight { get; set; }
    public DateOnly Date { get; set; }
    public Address SourceAddress { get; set; }
    public Address DestinationAddress { get; set; }
    public string Priority { get; set; }
    public bool DeliveredOnWeekend { get; set; }
}