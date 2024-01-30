
using API;
using API.Controllers;
using Application.Orders;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using NUnit.Framework;

namespace TestProject
{
    //[TestClass]
    [TestFixture]
    public class OrderControllerTests
    {
        private OrderController _orderController;
        private IMediator _mediator;

        [SetUp]
        public void Setup()
        {
            _mediator = Substitute.For<IMediator>();
            _orderController = new OrderController(_mediator);
        }
        [Test]
        public async Task GetOrders_ReturnsListOfOrders()
        {
            var orderDTOList = new List<OrderDTO>();
            _mediator.Send(Arg.Any<List.Query>()).Returns(Task.FromResult(orderDTOList));
            ActionResult<List<OrderDTO>> result = await _orderController.GetOrders();
            //Assert.IsNotNull(result);
            //Assert.IsInstanceOf<List<OrderDTO>>(result.Value);
        }
        
        [Test]
        public async Task CreateOrder_WithCorrectId_ReturnsOk()
        {
            var newOrder = new Order();
            IActionResult result = await _orderController.CreateOrder(newOrder);
            // sprawdzamy czy mediator byl wywolany z takim argumentem
            await _mediator.Received(1).Send(Arg.Is<Create.Command>(c => c.Order == newOrder)); 
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<OkResult>(result);
        }
    }

    
}