using API.Extensions;
using Microsoft.EntityFrameworkCore;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Google Authentication

var configuration = builder.Configuration;
builder.Services.AddAuthentication().AddGoogle(googleOptions =>
{
    googleOptions.ClientId = configuration["Authentication:Google:ClientId"];
    googleOptions.ClientSecret = configuration["Authentication:Google:ClientSecret"];
});
// Add services to the container.

/*
builder.Services.AddControllers(opt =>
{
    var policy = new AuthorizationPolicyBuilder();
    opt.Filters.Add(new AuthorizedFilter(policy));
});
*/
builder.Services.AddControllers();
builder.Services.AddIdentityServices(builder.Configuration);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});
/*builder.Services.AddCors(opt =>
{
    /*opt.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173",
            "http://localhost:5173/", "http://localhost:5173/login",
            "http://localhost:5173/register", "http://localhost:5173/form",
            "https://localhost:5173",
            "https://localhost:5173/", "https://localhost:5173/login",
            "https://localhost:5173/register", "https://localhost:5173/form");
    });#1#
});*/

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

//app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    await next();
});

app.MapControllers();

Console.WriteLine("Hello from Windows");
Console.WriteLine("Hello from Mac on feature-test-mac branch");
Console.WriteLine("Hello from Windows on feature-test-windows branch");

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<DataContext>();
    await context.Database.MigrateAsync();
    await Seed.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "an error occured during migration");

    throw;
}

app.Run();
