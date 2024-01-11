using MediatR;
using API.DTOs;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Mapster;
using Domain;

namespace Application.Orders
{
    public class MakeOrder
    {
        public class Query : IRequest<int>
        {
            public InquiryDTO? Order { get; set; }
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
                // create Order object, insert it into database, return its id
                var order = request.Order.Adapt<Order>();
                await _context.Orders.AddAsync(order);
                await _context.SaveChangesAsync();

                int Id = order.Id;
                return Id;
            }
        }
    }
}