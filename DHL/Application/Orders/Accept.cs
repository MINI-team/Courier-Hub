using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Accept
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
                if(order is not null && order.Status == 0)
                    order.Status = 1;
                await _context.SaveChangesAsync();
            }
        }
    }
}