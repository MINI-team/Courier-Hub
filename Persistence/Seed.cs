using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void ClearData(DataContext context)
        {
            Console.WriteLine("Clearing data---------------------------------------------------------------------------");
            var _context = context;
            var allOrders = _context.Orders.ToList();
            _context.Orders.RemoveRange(allOrders);

            // Delete all records in the Inquiries table
            var allInquiries = _context.Inquiries.ToList();
            _context.Inquiries.RemoveRange(allInquiries);

            // Delete all records in the Clients table
            var allClients = _context.Clients.ToList();
            _context.Clients.RemoveRange(allClients);

            // Delete all records in the Addresses table
            var allAddresses = _context.Addresses.ToList();
            _context.Addresses.RemoveRange(allAddresses);

            // Save changes to the database
            _context.SaveChanges();
        }
        public static async Task SeedData(DataContext context)
        {
            Console.WriteLine("Seeding data---------------------------------------------------------------------------");
            if(context.Orders.Any() || context.Inquiries.Any() || context.Addresses.Any()) return;
            Console.WriteLine("Actually Seeding data---------------------------------------------------------------------------");
            var addresses = new List<Address>();
            var clients = new List<Client>();
            var inquiries = new List<Inquiry>();
            var orders = new List<Order>();

            for (int i = 0; i < 5; i++)
            {
                var address = new Address
                {
                    StreetName = $"Street {i + 1}",
                    StreetNo = 100 + i,
                    FlatNo = 10 + i,
                    ZipCode = $"ZIP{i + 1}",
                    City = $"City {i + 1}"
                };
                addresses.Add(address);
            }

            var firstNames = new string[] { "Anna", "Marek", "Katarzyna", "Piotr", "Ewa" };
            var lastNames = new string[] { "Kowalska", "Nowak", "Wójcik", "Adamczyk", "Zając" };

            for (int i = 0; i < 5; i++)
            {
                var client = new Client
                {
                    FirstName = firstNames[i],
                    LastName = lastNames[i],
                    Email = $"{firstNames[i].ToLower()}.{lastNames[i].ToLower()}@example.com",
                    Login = $"user{i + 1}",
                    Password = "password123", // You should handle password hashing in a real application
                    Address = addresses[i],  // Associate an Address with the Client
                    AddressId = 1
                };
                clients.Add(client);
            }

            string[] priority_options = {"low", "high"};

            for (int i = 0; i < 5; i++)
            {
                var inquiry = new Inquiry
                {
                    Width = 4 * i + i * i + 5,
                    Height = 6 * i + 2 * i * i + 7,
                    Weight = 2 * i + 8 * i * i + i*i*i + 15,
                    Date = DateOnly.FromDateTime(DateTime.Now.AddDays(3).AddDays(i)),
                    SourceAddress = addresses[i],
                    DestinationAddress = addresses[(i + 1) % 5],
                    Priority = priority_options[i%2],
                    DeliveredOnWeekend = i % 2 == 0 ? true : false,
                };
                inquiries.Add(inquiry);
            }

            var internationalCompanies = new string[]
            {
                "DHL Express",
                "FedEx International",
                "UPS Worldwide",
            };

            for (int i = 0; i < 5; i++)
            {
                var order = new Order
                {
                    Client = clients[i],
                    CompanyName = internationalCompanies[i % 3],
                    Price = 3.07 + i * 0.39,
                    Inquiry = inquiries[i]
                };
                orders.Add(order);
            }

            await context.Addresses.AddRangeAsync(addresses);
            await context.Clients.AddRangeAsync(clients);
            await context.Inquiries.AddRangeAsync(inquiries);
            // await context.SaveChangesAsync();
            await context.Orders.AddRangeAsync(orders);

            await context.SaveChangesAsync();
        }
    }
}