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

        public static void Configure()
        {
            Console.WriteLine("Configure====================================");
            Console.WriteLine("Configure====================================");
            TypeAdapterConfig<Order, OldOrder>
            .NewConfig().Map(dest => dest.DeliveryTime, src => src.lastTimestamp);
        }
    }

    // public class OrderToOldOrderMapper : IRegister
    // {
    //     void IRegister.Register(TypeAdapterConfig config){
    //         config.NewConfig<Order, OldOrder>().Map("DeliveryTime", "lastTimestamp");
    //     }
    // }
}