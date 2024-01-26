import Header from "../web/From/Header";
import Footer from "../web/From/Footer";
import {Link, useParams} from "react-router-dom";
import React from "react";

const OrderDetail =()=>{
    const {Orderid} = useParams();
    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`http://localhost:7212/api/orders/${Orderid}`);
                setOrder(response.data);
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };

        fetchOrder();
    }, [orderId]);

    if (!order) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Header></Header>
            <h2>Order Detail</h2>
            <p>Item Name: {order.itemName}</p>
            <p>Item Quantity: {order.itemQty}</p>
            <Footer/>
        </>
    )
}
export default OrderDetail;