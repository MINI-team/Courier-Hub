using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Orders.Any()) return;

            var inquiries = new List<Inquiry>
            {
                new Inquiry
                {
                    Width = 25,
                    Height = 94,
                    Weight = 758,
                    Date = DateOnly.FromDateTime(DateTime.Now.AddDays(3)),
                }
            };

            var orders = new List<Order>
            {
                new Order
                {
                    CompanyName = "DHL",
                    Price = 5.34,
                }
            };

            await context.Orders.AddRangeAsync(orders);
            await context.SaveChangesAsync();
        }
    }
}