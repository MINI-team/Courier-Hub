using MediatR;
using API.DTOs;

namespace Application.Offers
{
    public class Get
    {
        public class Query : IRequest<InquiryDTO>
        {
            public InquiryDTO? Order { get; set; } // not DTO

            public class Handler : IRequestHandler<Query, InquiryDTO>
            {
                Task<InquiryDTO> IRequestHandler<Query, InquiryDTO>.Handle(Query request, CancellationToken cancellationToken)
                {
                    throw new NotImplementedException();
                }
            }
        }
    }
}