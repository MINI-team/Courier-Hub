using API;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Orders
{
    public class List
    {
        public class Query : IRequest<List<OrderDTO>> {} // todo: pass clientId as props ???

        public class Handler : IRequestHandler<Query, List<OrderDTO>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context; 
            }
            public async Task<List<OrderDTO>> Handle(Query request, CancellationToken cancellationToken)
            {
                List<Order> orders = await _context.Orders.ToListAsync();
                List<OrderDTO> orderDTOs = new List<OrderDTO>(orders.Count);
                foreach(var order in orders)
                {
                    orderDTOs.Add(await Mapping.Mapping.OrderToDTO(order));
                }
                return orderDTOs;
            }
        }
    }
}