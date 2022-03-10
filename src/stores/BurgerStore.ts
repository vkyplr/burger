import { action, makeObservable, observable } from "mobx";
import { Ingredients } from "../constants/Ingredients"
import Burger from "../interfaces/Burger";
import RootStore from "./RootStore";

class BurgerStore {

    burgerInfo: Array<number>;
    burgers: Array<Burger>;
    totalAmount: number;
    rootStore: RootStore;
    readonly: boolean;

    constructor(rootStore: RootStore) {
        this.burgerInfo = [];
        this.totalAmount = 0;
        this.rootStore =  rootStore;
        this.burgers = [];
        this.readonly = false;
        makeObservable(this, {
            burgerInfo: observable,
            totalAmount: observable,
            burgers: observable,
            readonly: observable,
            addIngredient: action,
            removeIngredient: action,
            clearBurger: action,
            makeRegularBurger: action,
            setBurger: action,
            setBurgerReadOnly: action,
        });
    }

    setBurger = (info: Array<number>) => {
        // this.clearBurger();
        this.burgerInfo = info;
    }

    addIngredient = (ingredient: number) => {
        this.burgerInfo.unshift(ingredient);
        this.totalAmount = this.totalAmount + Ingredients[ingredient].price;
    } 
    
    removeIngredient = (ingredient: number) => {
        this.burgerInfo.splice(this.burgerInfo.indexOf(ingredient), 1);
        this.totalAmount = this.totalAmount - Ingredients[ingredient].price;
    }

    clearBurger = () => {
        this.burgerInfo = [];
        this.totalAmount = 0;
        this.readonly = false;
        this.rootStore.setBurgerHeading('Burger')
    }

    makeRegularBurger = () => {
        let burger: Array<number> = [];
        let amount: number = 0;
        for (let index = Ingredients.length - 1; index >= 0; index--) {
            burger.unshift(index);
            amount += Ingredients[index].price;
        }
        this.burgerInfo = [...burger];
        this.totalAmount = amount;
    }

    saveBurger = (info: Array<number>) => {
        this.burgers.push({
            id: this.burgers.length,
            info,
        });
        return this.burgers.length - 1;
    }

    setBurgerReadOnly = (burgerId: number, orderId: number) => {
        let burger = this.burgers.filter(e => e.id === burgerId)[0].info;
        this.setBurger(burger);
        this.totalAmount = 0;
        burger.map(e => this.totalAmount += Ingredients[e].price);
        this.rootStore.setBurgerHeading(`Order #${orderId}`);
        this.readonly = true;
    }
}

export default BurgerStore;