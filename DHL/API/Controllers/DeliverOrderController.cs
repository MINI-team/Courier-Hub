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
    public class DeliverOrderController : BaseApiController
    {
        [HttpPost("{id}")]
        public async Task<IActionResult> HandleRequest(int id)
        {
            await Mediator.Send(new Deliver.Command{OrderId = id});
            return Ok($"Order {id} delivered");
        }
    }
}