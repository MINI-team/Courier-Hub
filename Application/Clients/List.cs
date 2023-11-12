using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Clients;

public class List
{
    public class Query : IRequest<List<Client>>
    {
    }
    
    public class Handler : IRequestHandler<Query, List<Client>>
    {
        private readonly DataContext _context;
        public Handler(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Client>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await _context.Clients.ToListAsync();
        }
    }
}