using System.Text;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace API.Extensions;

public static class IdentityServiceExtensions
{
    public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddAuthentication().AddGoogle(googleOptions =>
        {
            googleOptions.ClientId = config["Authentication:Google:ClientId"];
            googleOptions.ClientSecret = config["Authentication:Google:ClientSecret"];
        });

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("super secret key super secret key super secret key super secret key"));
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(opt =>
            {
                opt.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = key, // validate that user is signed
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
        services.AddScoped<TokenService>();
        return services;
    }
}