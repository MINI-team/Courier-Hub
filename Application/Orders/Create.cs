using Domain;
using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Create
    {
        public class Command : IRequest
        {
            public Order? Order { get; set; } // not DTO

            public class Handler : IRequestHandler<Command>
            {
                DataContext _context;
                public Handler(DataContext context) // tightly coupled, 
                // może lepiej trzymać to oddzielnie (ale wsm może by)
                {
                    _context = context;                    
                }
                public async Task Handle(Command request, CancellationToken cancellationToken)
                {
                    _context.Orders.Add(request.Order!);
                    await _context.SaveChangesAsync();
                }
            }
        }
    }
}