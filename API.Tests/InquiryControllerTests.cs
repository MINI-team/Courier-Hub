using API;
using API.Controllers;
using Application.Orders;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;

namespace TestProject;

public class InquiryControllerTests
{
    [TestFixture]
    public class InquiryControllerTests
    {
        private InquiryController _inquiryController;
        private IMediator _mediator;

        [SetUp]
        public void Setup()
        {
            _mediator = Substitute.For<IMediator>();
            _inquiryController = new InquiryController(_mediator);
        }

        [Test]
        public async Task GetInquiries_ReturnsListOfOrders()
        {
            var orderDTOList = new List<OrderDTO>();
            _mediator.Send(Arg.Any<List.Query>()).Returns(Task.FromResult(orderDTOList));
            ActionResult<List<OrderDTO>> result = await _inquiryController.GetInquiries();
            result.Should().BeNotNull();
            //Assert.IsNotNull(result);
            //Assert.IsInstanceOf<List<OrderDTO>>(result.Value);
        }

        [Test]
        public async Task CreateInquiry_WithCorrectOrder_ReturnsOk()
        {
            
            var newOrder = new Order();
            IActionResult result = await _inquiryController.CreateInquiry(newOrder);
            await _mediator.Received(1).Send(Arg.Is<Create.Command>(c => c.Order == newOrder));
            Assert.IsNotNull(result);
            Assert.IsInstanceOf<OkResult>(result);
        }
    }
}