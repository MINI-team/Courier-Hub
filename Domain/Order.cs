namespace Domain
{
    public class Order
    {
        public Guid Id { get; set; }
        public Inquiry InquiryInfo { get; set; }
        public string CompanyName { get; set; }
        public float Price { get; set; }
    }
}