using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Orders;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AcceptOrderController : BaseApiController
    {
        [HttpPost("{id}")]
        public async Task<IActionResult> AcceptOrder(int id)
        {
            await Mediator.Send(new Accept.Command{OrderId = id});
            return Ok();
        }
    }
}