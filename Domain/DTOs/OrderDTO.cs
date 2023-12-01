using Domain;

namespace API
{
    public class OrderDTO
    {
        public int Id { get; set; }
        public Client? Client { get; set; }
        public Inquiry? Inquiry { get; set; }
        public string CompanyName { get; set; }
        public double Price { get; set; }
    }
}