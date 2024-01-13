using System.Net;
using System.Net.Mail;
using System.Security;
using Domain;

namespace Application.Services
{
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string messageText)
        {
            Console.WriteLine("-----------------------------------------------------------------------");
            Console.WriteLine($"{email} {subject} {messageText}");
            // var ourEmail = "marysiagwiazda0@gmail.com";
            var ourEmail = "courier-hub@outlook.com";
            // var pw = "stachson";
            var pw = ConvertToSecureString("Stachson");
            // var pw = ConvertToSecureString("stachson");
            // var client = new SmtpClient("smtp.gmail.com", 587)
            var client = new SmtpClient("smtp-mail.outlook.com", 587)
            {
                EnableSsl = true,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(ourEmail, pw)
            };

            Console.WriteLine("client established");

            // MailAddress from = new MailAddress(ourEmail,
            //    "Marysia " + (char)0xD8+ " Gwiazda",
            // System.Text.Encoding.UTF8);
            // MailAddress to = new MailAddress(email);
            // MailMessage message = new MailMessage(from, to);
            // message.Subject = subject;
            // message.Body = messageText;

            // client.Send(message);
            // // client.SendAsync(message, "userToken");
            
            return client.SendMailAsync(
                new MailMessage(from: ourEmail,
                                to: email,
                                subject,
                                messageText
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