using Application.Orders;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class OrderController : BaseApiController
    {
        public OrderController() { }

        [HttpGet]
        public async Task<ActionResult<List<OrderDTO>>> GetOrders()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(Guid id)
        {
            // return await _context.Orders.FindAsync(id);
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder(Order order)
        {
            await Mediator.Send(new Create.Command {Order = order});
            return Ok();
        }
    }
}