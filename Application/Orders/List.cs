using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Orders
{
    public class List
    {
        public class Query : IRequest<List<Order>> {} // todo: pass clientId as props ???

        public class Handler : IRequestHandler<Query, List<Order>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context; 
            }
            public async Task<List<Order>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Orders.ToListAsync();
                // .Include(o => o.Client)
                // .Include(o => o.InquiryInfo)
                // .ToListAsync();
            }
        }

    }
}