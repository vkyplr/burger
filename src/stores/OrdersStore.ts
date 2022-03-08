import Order from '../interfaces/Order';
import { makeObservable, observable, action } from 'mobx';
import RootStore from './RootStore';

class OrderStore {
    
    orders: Array<Order> = [];
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            orders: observable,
            addOrder: action
        });
    }

    addOrder = (order: Order) => this.orders.push(order);
}

export default OrderStore;