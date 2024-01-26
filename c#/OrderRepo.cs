namespace API.KtraDMAWS;

public interface OrderRepo
{
    Order1 addOrder1(Order1 order1);
    Order1 UpdateOrder(Order1 order1);
    Order1 findByOrderId(int orderId);
    List<Order1> findAllOrder1s();
    string DeleteOrder(Order1 orderId);
}