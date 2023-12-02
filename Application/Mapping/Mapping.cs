using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using API;
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
        public static async Task<InquiryDTO> InquiryToDTO(Inquiry inquiry)
        {
            var inquiryDTO = inquiry.Adapt<InquiryDTO>();
            inquiryDTO.SourceAddress = (await _context!.Addresses.FindAsync(inquiry!.SourceAddressId))!;
            inquiryDTO.DestinationAddress = (await _context!.Addresses.FindAsync(inquiry!.DestinationAddressId))!;
            return inquiryDTO; // Address is not DTO, idk how the DTO would be different from Domain Entity
        }

        public static async Task<OrderDTO> OrderToDTO(Order order)
        {
            var orderDTO = order.Adapt<OrderDTO>();
            var inquiry = await _context!.Inquiries.FindAsync(order.InquiryId);
            var inquiryDTO = await InquiryToDTO(inquiry!);
            orderDTO.Inquiry = inquiryDTO;
            // var inquiryDTO = await Mapping.Mapping.InquiryToDTO(inquiry);
            // var inquiryDTO = inquiry.Adapt<InquiryDTO>();
            // inquiryDTO.SourceAddress = (await _context.Addresses.FindAsync(inquiry!.SourceAddressId))!;
            // inquiryDTO.DestinationAddress = (await _context.Addresses.FindAsync(inquiry!.DestinationAddressId))!;
            return orderDTO;
        }
    }
}