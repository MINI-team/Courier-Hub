using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
       
        services.AddDbContext<DataContext>(opt =>
        {
            opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
        });
        services.AddCors(opt =>
        {
            opt.AddPolicy("CorsPolicy", policy =>
            {
                policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173",
                    "http://localhost:5173/", "http://localhost:5173/login",
                    "http://localhost:5173/register", "http://localhost:5173/form",
                    "https://localhost:5173",
                    "https://localhost:5173/", "https://localhost:5173/login",
                    "https://localhost:5173/register", "https://localhost:5173/form");
            });
        });
        services.AddAutoMapper(typeof(MappingProfiles).Assembly);
        services.AddHttpContextAccessor();
        return services;
    }
}