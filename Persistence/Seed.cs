using Domain;

namespace Persistence;

public class Seed
{
    public static async Task SeedData(DataContext? context)
    {
        if(context == null) return;
        if(context.Clients.Any()) return;
        var clients = new List<Client>
        {
            new Client
            {
                Email = "vladagromova1106@gmail.com",
                FirstName = "Vlada",
                LastName = "Gromova"
            }
        };
        await context.Clients.AddRangeAsync(clients);
        await context.SaveChangesAsync();
    }

}