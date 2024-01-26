import Header from "../web/From/Header";
import Footer from "../web/From/Footer";
import {useEffect} from "react";
import axios from "axios";

const kitra =()=>{
    const [formData, setFormData] = useState({
        itemCode: '',
        itemName: '',
        itemQty: '',
        orderAddress: '',
        orderDelivery: '',
        phoneNumber: '',
        userId: '',
        payment: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Gọi API POST với dữ liệu formData
            const response = await axios.post(
                "https://localhost:7212/api/Order/addOrder",
                formData
            );
            console.log("API response:", response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Không cần fetchData ở đây nếu không sử dụng nó
    }, [formData]);


    return(
        <>
        <Header/>
            <h2>Order Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="itemCode">Item Code:</label>
                <input type="number" id="itemCode" name="itemCode" value={formData.itemCode} onChange={handleChange} required />

                <label htmlFor="itemName">Item Name:</label>
                <input type="text" id="itemName" name="itemName" value={formData.itemName} onChange={handleChange} required />

                <label htmlFor="itemQty">Item Quantity:</label>
                <input type="number" id="itemQty" name="itemQty" value={formData.itemQty} onChange={handleChange} required />

                <label htmlFor="orderAddress">Order Address:</label>
                <textarea id="orderAddress" name="orderAddress" value={formData.orderAddress} onChange={handleChange} required />

                <label htmlFor="orderDelivery">Order Delivery:</label>
                <input type="datetime-local" id="orderDelivery" name="orderDelivery" value={formData.orderDelivery} onChange={handleChange} required />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber}  onChange={handleChange} required />

                <label htmlFor="userId">User ID:</label>
                <input type="number" id="userId" name="userId" value={formData.userId} onChange={handleChange}   required />

                <label htmlFor="payment">Payment:</label>
                <input type="number" id="payment" name="payment" value={formData.payment} onChange={handleChange} required />

                <button type="submit" >Submit</button>
            </form>

        <Footer/>
        </>
    )
}
export default kitra()