using MediatR;
using API.DTOs;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Mapster;
using Domain;
using Domain.DTOs;

namespace Application.Orders
{
    public class GetOrdersOfficeWorker
    {
        public class Query : IRequest<List<OrderDTO>>
        {
        }

        public class Handler : IRequestHandler<Query, List<OrderDTO>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;  
            }
            public async Task<List<OrderDTO>> Handle(Query request, CancellationToken cancellationToken)
            {
                List<OrderDTO> res = new List<OrderDTO>();
                foreach(var order in _context.Orders)
                {
                    if(order.Status == 0 || order.Status == 2)
                        res.Add(await Mapping.Mapping.OrderToDTO(order));
                        // res.Add(order.Adapt<OrderDTO>());
                }

                return res;
            }
        }
    }
}