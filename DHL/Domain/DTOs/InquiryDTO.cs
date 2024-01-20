using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class InquiryDTO
    {
        public int Width { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public DateOnly Date { get; set; }
        public AddressDTO SourceAddress { get; set; }
        public AddressDTO DestinationAddress { get; set; }
    }
}