import { observable, action, makeObservable, computed } from 'mobx'
import { computedFn } from 'mobx-utils';
import Burger from '../interfaces/Burger';
import Customer from '../interfaces/Customer';
import RootStore from './RootStore';
import { Ingredients } from '../constants/Ingredients';

class CustomerStore {

    customers: Array<Customer>;
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.customers = [];
        makeObservable(this, {
            customers: observable,
            addCustomer: action,
            totalCustomers: computed,
            addBurger: action
        })
    }

    get totalCustomers () {
        return this.customers.length;
    }

    checkIfCustomerExists = (name: string, phone: string) => {
        let customers = [...this.customers];
        let filtered = customers.filter(e => (e.name === name && e.phone === phone))
        return (filtered.length) ? filtered[0] : false;
    }

    addCustomer = (customer: Customer) => {
        this.customers.push(customer);
        return this.customers[this.customers.length - 1];
    }

    getCustomerTotalAmount = (burgers: Array<Burger>) => {
        let total = 0;
        for (let i = 0; i < burgers.length; i++) {
            let burgerInfo = burgers[i].info
            for (let j = 0; j < burgerInfo.length; j++) {
                total += Ingredients[burgerInfo[j]].price;
            }
        }
        return total;
    }

    addBurger = (burgerId: number, customerId: number) => {
        this.customers[customerId].burgers?.push(burgerId);
    }

}

export default CustomerStore;