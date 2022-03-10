interface Order {
    id?: number,
    customerId: number,
    burgerId: number,
    totalAmount: number,
    date: Date
}

export default Order;