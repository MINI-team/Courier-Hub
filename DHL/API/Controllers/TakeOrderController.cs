using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Orders;
using Domain.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api")]
    // [Route("api/[controller]")]
    public class TakeOrderController : BaseApiController
    {
        // [HttpPost("{id}")]
        [HttpPost("TakeOrder/{id}")]
        public async Task<IActionResult> TakeOrder(int id, [FromBody] CourierActionDTO body)
        {
            await Mediator.Send(new Take.Command{OrderId = id, CourierID = body.CourierId});
            return Ok($"Order {id} taken by courier {body.CourierId}");
        }
    }
}