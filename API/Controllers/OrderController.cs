using Application.Orders;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class OrderController : BaseApiController
    {
        private IMediator _mediator;

        public OrderController(IMediator mediator)
        {
            _mediator = mediator;
        }

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