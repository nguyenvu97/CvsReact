import Header from "../web/From/Header";
import Footer from "../web/From/Footer";
import {Link} from "react-router-dom";
import React from "react";

const OrderAll = ()=>{
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:7212/api/order/getAllOrder');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);
    return (
        <>
            <Header/>
            <div>
                <h2>Order List</h2>
                <ul>
                    {orders.map((order) => (
                        <li key={order.orderId}>
                            <p>Item Name: {order.itemName}</p>
                            <p>Item Quantity: {order.itemQty}</p>
                            <Link
                                className="aa-product-img"
                                to={`/order1/${order.id}`} /// them product detaile
                            >
                                <img src={order.itemName} alt={order.itemQty} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer/>
        </>
    )
}
export default OrderAll