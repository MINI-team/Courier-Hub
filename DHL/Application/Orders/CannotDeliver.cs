using Domain;
using Mapster;
using MediatR;
using Persistence;

namespace Application.Orders
{
    public class CannotDeliver
    {
        public class Command : IRequest
        {
            public int OrderId { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IEmailSender _emailSender;
            public Handler(DataContext context, IEmailSender emailSender)
            {
                _context = context;
                _emailSender = emailSender;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var order = await _context.Orders.FindAsync(request.OrderId);
                if(order is not null && (order.Status == 3 || order.Status == 4))
                {
                    order.Status = 1; // now someone else can take it
                    // var oldOrder = order.Adapt<OldOrder>();
                    // _context.DeliveredOrders.Add(oldOrder);
                    // _context.Orders.Remove(order);
                    await _context.SaveChangesAsync();

                    string destEmail = "glowacki.pj@gmail.com",
                    subject = "Cannot deliver",
                    message = $"I cannot deliver order {order.Id}";
                    _emailSender.SendEmailAsync(destEmail, subject, message);
                }
                
            }
        }
    }
}