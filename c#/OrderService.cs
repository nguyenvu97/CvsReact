using API.Data;

namespace API.KtraDMAWS;

public class OrderService : OrderRepo
{
    public readonly ApplicationDbContext _DbContext;
    

    public OrderService(ApplicationDbContext dbContext )
    {
        _DbContext = dbContext;
    }
    
    public Order1 addOrder1(Order1 order1)
    {
        var order = new Order1();
        order.OrderDelivery = DateTime.Now.AddDays(3);
        order.OrderAddress = order1.OrderAddress;
        order.payment = order1.payment;
        order.ItemCode = order1.ItemCode;
        order.ItemName = order1.ItemName;
        order.PhoneNumber = order1.PhoneNumber;
        order.UserId = order1.UserId;
        order.ItemQty = order1.ItemQty;
        _DbContext.Order1s.Add(order);
        _DbContext.SaveChanges();
        return order;
    }

    public Order1 UpdateOrder(Order1 order1)
    {
        _DbContext.Order1s.Update(order1);
        _DbContext.SaveChanges();
        return order1;
    }

    public Order1 findByOrderId(int orderId)
    {
          var order1 = _DbContext.Order1s.Find(orderId);
          if (order1 == null)
              throw new Exception("Can not Find By" + orderId );
          return order1;

    }
    public List<Order1> findAllOrder1s()
    {
        var allOrders = _DbContext.Order1s.ToList();
        return allOrders;
    }

    public string DeleteOrder(Order1 order)
    {
        var order1 = _DbContext.Order1s.Remove(order);
        if (order1 == null)
            throw new Exception("find By Order" + order);
        return "xoa thanh cong roi ";
    }
}