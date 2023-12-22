using System.Net;
using System.Net.Mail;
using System.Security;
using Domain;

namespace Application.Services
{
    public class EmailSender : IEmailSender
    {
        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var ourEmail = "marysiagwiazda0@gmail.com";
            // var pw = "stachson";
            var pw = ConvertToSecureString("stachson");
            var client = new SmtpClient("smtp.gmail.com", 587)
            {
                EnableSsl = true,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(ourEmail, pw)
            };
            
            await client.SendMailAsync(
                new MailMessage(from: ourEmail,
                                to: email,
                                subject,
                                message
                                ));
        }

        private SecureString ConvertToSecureString(string password)
        {
            var secureString = new SecureString();
            foreach (char c in password)
            {
                secureString.AppendChar(c);
            }
            secureString.MakeReadOnly();
            return secureString;
        }
    }
}