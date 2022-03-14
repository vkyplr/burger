import Order from '../interfaces/Order';
import { makeObservable, observable, action, computed } from 'mobx';
import RootStore from './RootStore';

class OrderStore {
    
    orders: Array<Order> = [];
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            orders: observable,
            totalOrders: computed,
            allOrders: computed,
            totalEarnings: computed,
            addOrder: action
        });
    }

    get totalOrders() {
        return this.orders.length;
    }

    get allOrders() {
        return this.orders;
    }

    addOrder = (order: Order) => this.orders.push(order);

    get totalEarnings() {
        let totalEarnings = 0;
        this.orders.map(e => totalEarnings += e.totalAmount);
        return totalEarnings;
    }
}

export default OrderStore;