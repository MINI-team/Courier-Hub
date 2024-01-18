
using API;
using API.Controllers;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace TestProject
{
    //[TestClass]
    [TestFixture]
    public class OrderControllerTests
    {
        private OrderController _orderController;

        [SetUp]
        public void Setup()
        {
            _orderController = new OrderController();
        }
        [Test]
        public async Task GetOrders_ReturnsListOfOrders()
        {
            // moq Nsubstitute
            ActionResult<List<OrderDTO>> result = await _orderController.GetOrders();
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<List<OrderDTO>>(result.Value);
        }
        
        [Test]
        public async Task CreateOrder_WithValidOrder_ReturnsOk()
        {
            Order newOrder = new Order();
            IActionResult result = await _orderController.CreateOrder(newOrder);
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<OkResult>(result);
        }
    }

    
}