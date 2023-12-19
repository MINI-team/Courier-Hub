using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OffersController : BaseApiController
    
        public OffersController() { }

        [HttpPost]
        public async Task<IActionResult> CreateOrder(InquiryDTO inquiry)
        {
            await Mediator.Send(new Create.Command {Order = order});
            return Ok();
        }
    }
}