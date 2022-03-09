import Burger from "./Burger";

interface Customer {
    id?: number,
    name?: string,
    phone?: string,
    burgers?: Array<Burger>
}

export default Customer;