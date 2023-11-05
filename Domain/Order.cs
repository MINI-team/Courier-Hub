namespace Domain
{
    public class Order
    {
        public Guid Id { get; set; }
        public Inquiry InquiryInfo { get; set; }
        public Offer OfferInfo { get; set; }
        public NecessaryInfo NecessaryInfo { get; set; }
    }
}