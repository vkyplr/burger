import { createContext, ReactNode, useState } from "react"
import { Theme } from '@mui/material';
import { Theme1, Theme2 } from './Themes/Theme';

export const Ingredients = [
    { name: 'Onion', price: 15 },
    { name: 'Cheese', price: 20 },
    { name: 'Tomato', price: 15 },
    { name: 'Lettuce', price: 30 },
    { name: 'Patty', price: 45 },
]

export interface ContextInterface {
    theme: Theme,
    burgerInfo: Array<number>,
    totalAmount: number,
    switchTheme: (theme: string) => void,
    addIngredient: (ingredient: number) => void,
    removeIngredient: (ingredient: number) => void,
    clearBurger: () => void,
    makeRegularBurger: () => void
}

export const State = createContext<ContextInterface>({
    theme: Theme2,
    burgerInfo: [],
    totalAmount: 0,
    switchTheme: (theme: string) => {},
    addIngredient: (ingredient: number) => {},
    removeIngredient: (ingredient: number) => {},
    clearBurger: () => {},
    makeRegularBurger: () => {},
});

interface Props {
    children: ReactNode
}

const Context = ({ children }: Props) => {
    const [theme, setTheme] = useState<Theme>(Theme2);
    const [burgerInfo, setBurgerInfo] = useState<Array<number>>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0)

    const switchTheme = (theme: string) => {
        switch (theme) {
            case "theme1":
                setTheme(Theme1);
                break;
            case "theme2":
                setTheme(Theme2);
                break;
        }
    }
    
    const addIngredient = (ingredient: number) => {
        setBurgerInfo([ingredient,...burgerInfo]);
        setTotalAmount(totalAmount + Ingredients[ingredient].price);
    } 
    
    const removeIngredient = (ingredient: number) => {
        let tempInfo = [...burgerInfo];
        tempInfo.splice(tempInfo.indexOf(ingredient), 1);
        setBurgerInfo([...tempInfo]);
        setTotalAmount(totalAmount - Ingredients[ingredient].price);
    }

    const clearBurger = () => {
        setBurgerInfo([]);
        setTotalAmount(0);
    }

    const makeRegularBurger = () => {
  
    }

    return (
        <State.Provider 
            value={{ 
                theme, 
                burgerInfo,
                totalAmount,
                switchTheme, 
                addIngredient,
                removeIngredient,
                clearBurger,
                makeRegularBurger,
            }}
        >
            {children}
        </State.Provider>
    );
}

export default Context