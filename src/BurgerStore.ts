import { Theme } from "@mui/material";
import { action, makeObservable, observable } from "mobx";
import { Theme1, Theme2 } from './Themes/Theme'

interface Ingredient {
    name: string,
    price: number
}

export const Ingredients: Array<Ingredient> = [
    { name: 'Onion', price: 15 },
    { name: 'Cheese', price: 20 },
    { name: 'Tomato', price: 15 },
    { name: 'Lettuce', price: 30 },
    { name: 'Patty', price: 45 },
]

export class Store {

    burgerInfo: Array<number> = [];
    totalAmount: number = 0;
    theme: Theme = Theme2;

    constructor() {
        makeObservable(this, {
            theme: observable,
            burgerInfo: observable,
            totalAmount: observable,
            switchTheme: action,
            addIngredient: action,
            removeIngredient: action,
            clearBurger: action,
            makeRegularBurger: action
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

const BurgerStore =  new Store();

export default BurgerStore;