using MediatR;
using API.DTOs;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Mapster;
using Domain;

namespace Application.Orders
{
    public class GetOrdersOfficeWorker
    {
        public class Query : IRequest<List<Order>>
        {
        }

        public class Handler : IRequestHandler<Query, List<Order>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;  
            }
            public async Task<List<Order>> Handle(Query request, CancellationToken cancellationToken)
            {
                List<Order> res = new List<Order>();
                foreach(var order in _context.Orders)
                {
                    if(order.Status == 0 || order.Status == 2)
                        res.Add(order);
                }

                return res;
            }
        }
    }
}