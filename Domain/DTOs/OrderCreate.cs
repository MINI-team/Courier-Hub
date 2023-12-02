namespace Domain.DTOs
{
    public class OrderCreate
    {
        public class Order
    {
        public int Id { get; set; }
        public int ClientId {get; set;}
        public int InquiryId { get; set; }
        public string CompanyName { get; set; }
        public double Price { get; set; }
    }
    }
}