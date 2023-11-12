using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Orders;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class OrderController : BaseApiController
    {
        public OrderController() { }

        [HttpGet]
        public async Task<ActionResult<List<Order>>> GetOrders()
        {
            Console.WriteLine("Hello get---------------------------------------------------------------------------------------");
            return await Mediator.Send(new List.Query());
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrder(Guid id)
        {
            // return await _context.Orders.FindAsync(id);
            return Ok();
        }

        // [HttpPost]
        // public async Task<ActionResult<Order>> CreateOrder(Order order)
        // {
        //     Console.WriteLine("Hello post---------------------------------------------------------------------------------------");
        //     if (ModelState.IsValid)
        //     {
        //         _context.Orders.Add(order);
        //         await _context.SaveChangesAsync();

        //         return CreatedAtAction("GetOrder", new { id = order.Id }, order);
        //     }

        //     return BadRequest(ModelState);
        // }

    }
}