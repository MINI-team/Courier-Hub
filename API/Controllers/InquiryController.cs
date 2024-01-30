using Application.Orders;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class InquiryController : BaseApiController
    {
        private IMediator _mediator;

        public InquiryController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<OrderDTO>>> GetInquiries()
        {
            return await Mediator.Send(new List.Query());
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetInquiry(Guid id)
        {
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> CreateInquiry(Order order)
        {
            await Mediator.Send(new Create.Command {Order = order});
            return Ok();
        }
    }
}