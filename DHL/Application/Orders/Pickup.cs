using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Pickup
    {
        public class Command : IRequest
        {
            public int OrderId { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;  
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var order = await _context.Orders.FindAsync(request.OrderId);
                if(order is not null && order.Status == 3)
                {
                    order.Status = 4;
                }
                await _context.SaveChangesAsync();
            }
        }
    }
}