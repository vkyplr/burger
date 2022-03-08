import Burger from "./Burger";

interface Customer {
    name?: string,
    burgers?: Array<Burger>,
    amount?: number
}

export default Customer;