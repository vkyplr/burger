import Burger from "./Burger";
import Customer from "./Customer";

interface Order {
    customer: Customer,
    burger: Burger,
    totalAmount: number
}

export default Order;