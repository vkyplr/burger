import { Theme } from "@mui/material";
import BurgerStore from "./BurgerStore";
import OrderStore from "./OrdersStore";
import { Theme2, Theme1 } from '../Themes/Theme';
import { action, observable, makeObservable } from 'mobx';
import CustomerStore from "./CustomerStore";

export class RootStore {

    burgerStore: BurgerStore;
    orderStore: OrderStore;
    customerStore: CustomerStore;
    theme: Theme;
    burgerHeading: string;

    constructor() {
        this.theme = Theme2;
        this.burgerStore = new BurgerStore(this);
        this.orderStore = new OrderStore(this);
        this.customerStore = new CustomerStore(this);
        this.burgerHeading = 'Burger'
        makeObservable(this, {
            theme: observable,
            burgerHeading: observable,
            setBurgerHeading: action,
            switchTheme: action
        })
    }

    setBurgerHeading = (heading: string) => {
        this.burgerHeading = heading;
    }

    switchTheme = (theme: string) => {
        switch (theme) {
            case "theme1":
                this.theme = Theme1;
                break;
            case "theme2":
                this.theme = Theme2;
                break;
        }
    }

}

export default RootStore;