using Application.Orders;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RejectOrderController : BaseApiController
    {
        [HttpPost("{id}")]
        public async Task<IActionResult> AcceptOrder(int id)
        {
            await Mediator.Send(new Reject.Command{OrderId = id});
            return Ok();
        }
    }
}