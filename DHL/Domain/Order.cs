using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Order
    {
        public int Id { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public DateOnly Date { get; set; }
        public int SourceAddressId { get; set; }
        public Address SourceAddress { get; set; }
        public int DestinationAddressId { get; set; }
        public Address DestinationAddress { get; set; }
        public int Status { get; set; }
        public int CourierID { get; set; }
        public DateTime lastTimestamp { get; set; }
    }
}