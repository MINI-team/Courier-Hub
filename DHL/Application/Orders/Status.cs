using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Orders
{
    public class Status
    {
        public class Query : IRequest<int>
        {
            public int OrderId { get; set; }
        }

        public class Handler : IRequestHandler<Query, int>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;  
            }
            public async Task<int> Handle(Query request, CancellationToken cancellationToken)
            {
                var order = await _context.Orders.FindAsync(request.OrderId);
                int status = order.Status;
                return status;
            }
        }
    }
}