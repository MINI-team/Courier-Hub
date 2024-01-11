using Domain;
using Domain.DTOs;
using Mapster;
using Persistence;

namespace Application.Mapping
{
    public static class Mapping
    {
        public static DataContext? _context;

        // public static Mapping(DataContext context)
        // {
        //     _context = context;
        // }

        public static async Task<OrderDTO> OrderToDTO(Order order)
        {
            var orderDTO = order.Adapt<OrderDTO>();
            orderDTO.SourceAddress = (await _context!.Addresses.FindAsync(order!.SourceAddressId))!;
            orderDTO.DestinationAddress = (await _context!.Addresses.FindAsync(order!.DestinationAddressId))!;
            return orderDTO;
        }
    }
}