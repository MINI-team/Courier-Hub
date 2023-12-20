using MediatR;
using API.DTOs;

namespace Application.Offers
{
    public class Get
    {
        public class Query : IRequest<double>
        {
            public InquiryDTO? Order { get; set; } // not DTO
        }

        public class Handler : IRequestHandler<Query, double>
        {
            public async Task<double> Handle(Query request, CancellationToken cancellationToken)
            {
                await Task.Delay(0);
                return GetPrice(request.Order);
            }

            // public double Handle(Query request, CancellationToken cancellationToken)
            // // double IRequestHandler<Query, double>.Handle(Query request, CancellationToken cancellationToken)
            // {
            //     return new 21.37;
            // }

            double GetPrice(InquiryDTO? order)
            {
                return (double)(order is not null ? order.Weight :  150) / 100;
            }
        }
    }
}