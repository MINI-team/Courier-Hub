using Application.Orders;
using System.Text;
using API.Extensions;
using API.Services;
using Application.Core;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.IdentityModel.Tokens;
using Persistence;
using Application.Mapping;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers(opt => 
{
    var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build(); // COMMENTED THIS AND IN TSCONFIG.JSON
    opt.Filters.Add(new AuthorizeFilter(policy));
});

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
}
);
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblies(typeof(List.Handler).Assembly));

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(opt =>
{
    opt.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
});
//app.UseCors("CorsPolicy");


app.UseAuthentication();
app.UseAuthorization();

app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    await next();
});

app.MapControllers();
app.UseRouting();
/*
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers(); // Ensure this line is present
    // Other endpoint mappings...
});
*/

Console.WriteLine("Hello from Windows");
Console.WriteLine("Hello from Mac on feature-test-mac branch");
Console.WriteLine("Hello from Windows on feature-test-windows branch");

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<DataContext>();
    await context.Database.MigrateAsync();
    Console.WriteLine("After migration---------------------------------------------------------------------------");
    Seed.ClearData(context);
    await Seed.SeedData(context);
    Mapping._context = context;
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "an error occured during migration");
    throw;
}

app.Run();
