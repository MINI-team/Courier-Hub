using API;
using API.Controllers;
using Application.Orders;
using Domain;
using FluentAssertions;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using Shouldly;

namespace TestProject;

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
            result.Should().NotBe(null);
            result.Value.ShouldBeOfType<List<OrderDTO>>();
        }

        [Test]
        public async Task CreateInquiry_WithCorrectOrder_ReturnsOk()
        {
            
            var newOrder = new Order();
            IActionResult result = await _inquiryController.CreateInquiry(newOrder);
            await _mediator.Received(1).Send(Arg.Is<Create.Command>(c => c.Order == newOrder));
            
            result.Should().NotBe(null);
            result.ShouldBeOfType<List<OrderDTO>>();
        }
    }
