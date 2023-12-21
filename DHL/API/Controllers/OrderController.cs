using API.DTOs;
using Application.Orders;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : BaseApiController
    {
        public OrderController()
        {
        }

        [HttpPost]
        public async Task<ActionResult<double>> TakeOrder(InquiryDTO order)
        {
            return await Mediator.Send(new MakeOrder.Query {Order = order});
        }
    }
}