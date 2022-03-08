import { Theme } from "@mui/material";
import BurgerStore from "./BurgerStore";
import OrderStore from "./OrdersStore";
import { Theme2, Theme1 } from '../Themes/Theme';
import { action, observable, makeObservable } from 'mobx';

export class RootStore {

    burgerStore: BurgerStore;
    OrderStore: OrderStore;
    theme: Theme;

    constructor() {
        this.theme = Theme2;
        this.burgerStore = new BurgerStore(this);
        this.OrderStore = new OrderStore(this);
        makeObservable(this, {
            theme: observable,
            switchTheme: action
        })
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