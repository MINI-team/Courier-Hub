using Persistence;

namespace API.Controllers
{
    public class AddressController : BaseApiController
    {
        private readonly DataContext _context;
        public AddressController(DataContext context)
        {
            _context = context;
        }

        // [HttpGet]
        // public async Task<ActionResult<List<Address>>> GetAddresses()
        // {

        // }
    }
}