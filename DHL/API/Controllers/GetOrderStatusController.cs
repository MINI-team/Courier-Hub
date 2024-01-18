using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Orders;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    // [Route("Order/GetStatus")]
    [Route("api/[controller]")]
    public class GetOrderStatusController : BaseApiController
    {
        [HttpGet("{id}")]
        public async Task<ActionResult<int>> GetStatus(int id)
        {
            return await Mediator.Send(new Status.Query{OrderId = id});
        }
    }
}