using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Orders;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GetOrdersOfficeWorkerController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetStatus(int id)
        {
            return await Mediator.Send(new GetOrdersOfficeWorker.Query{});
        }
    }
}