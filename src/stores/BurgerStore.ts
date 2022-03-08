import { Theme } from "@mui/material";
import { action, makeObservable, observable } from "mobx";
import { Theme1, Theme2 } from '../Themes/Theme'
import { Ingredients } from "../Components/common/Ingredients"
import RootStore from "./RootStore";

class BurgerStore {

    burgerInfo: Array<number>;
    totalAmount: number;
    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.burgerInfo = [];
        this.totalAmount = 0;
        this.rootStore =  rootStore;
        makeObservable(this, {
            burgerInfo: observable,
            totalAmount: observable,
            addIngredient: action,
            removeIngredient: action,
            clearBurger: action,
            makeRegularBurger: action,
            setBurger: action
        })
    }

    setBurger = (info: Array<number>) => {
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
}

export default BurgerStore;