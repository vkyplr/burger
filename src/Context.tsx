import { createContext, ReactNode, useState } from "react"
import { Theme } from '@mui/material';
import { Theme1, Theme2 } from './Themes/Theme';

export interface ContextInterface {
    theme: Theme,
    burgerInfo: Array<number>,
    switchTheme: (theme: string) => void,
    addIngredient: (ingredient: number) => void,
    removeIngredient: (ingredient: number) => void,
}

export const State = createContext<ContextInterface>({
    theme: Theme2,
    burgerInfo: [],
    switchTheme: (theme: string) => {},
    addIngredient: (ingredient: number) => {},
    removeIngredient: (ingredient: number) => {} 
});

interface Props {
    children: ReactNode
}

const Context = ({ children }: Props) => {
    const [theme, setTheme] = useState<Theme>(Theme2);
    const [burgerInfo, setBurgerInfo] = useState<Array<number>>([]);

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
    } 
    
    const removeIngredient = (ingredient: number) => {
        let tempInfo = [...burgerInfo];
        tempInfo.splice(tempInfo.indexOf(ingredient), 1);
        setBurgerInfo([...tempInfo])
    }

    return (
        <State.Provider 
            value={{ 
                theme, 
                burgerInfo, 
                switchTheme, 
                addIngredient,
                removeIngredient
            }}
        >
            {children}
        </State.Provider>
    );
}

export default Context