using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class AddressDTO
    {
        public int Id { get; set; }
        public string StreetName { get; set; }
        public int StreetNo { get; set; }
        public int? FlatNo { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
    }
}