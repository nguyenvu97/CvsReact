using System.Runtime.InteropServices.JavaScript;
using Microsoft.AspNetCore.Mvc;

namespace API.KtraDMAWS;

[ApiController]
[Route("/api/Order")]
public class OrderController : ControllerBase
{
    public readonly OrderService _orderService;

    public OrderController(OrderService orderService)
    {
        _orderService = orderService;
    }

    [HttpPost("addOrder")]
    public IActionResult addOrder(Order1 order1)
    {
        return Ok(_orderService.addOrder1(order1));
    }
    [HttpPut("/updateOrder")]
    public IActionResult UpdateOrder(Order1 order1)
    {
        return Ok(_orderService.UpdateOrder(order1));
    }
    [HttpGet("/FindById")]
    public IActionResult FindByIdOrder(int order1)
    {
        return Ok(_orderService.findByOrderId(order1));
    }
    [HttpGet("/getAllOrder")]
    public IActionResult getAllOrder()
    {
        return Ok(_orderService.findAllOrder1s());
    }

    [HttpDelete("/deleteOrder")]
    public IActionResult deleteOrder(Order1 order1)
    {
        return Ok(_orderService.DeleteOrder(order1));
    }
}