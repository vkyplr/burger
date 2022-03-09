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
}

export default OrderStore;