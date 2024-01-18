using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using Application.Offers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OffersController : BaseApiController
    {
        public OffersController() { }

        [HttpPost]
        public async Task<ActionResult<double>> GetPrice(InquiryDTO inquiry)
        {
            return await Mediator.Send(new GetOffer.Query {Order = inquiry});
            // return Ok();
        }
    }
}