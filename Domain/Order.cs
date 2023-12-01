namespace Domain
{
    public class Order
    {
        public int Id { get; set; }
        public int ClientId {get; set;}
        public Client? Client { get; set; }
        public int InquiryId { get; set; }
        public Inquiry? Inquiry { get; set; }
        public string CompanyName { get; set; }
        public double Price { get; set; }
    }
}