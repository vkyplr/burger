import ColumnContainer from "../common/ColumnContainer";
import ingredients, { BunTop, BunBottom } from "./ingredients";
import { cloneElement } from "react";
import { Typography } from "@mui/material";
import BurgerStore from "../../BurgerStore";
import { observer } from "mobx-react-lite";

const Burger = () => {
    const { burgerInfo } = BurgerStore;
    return (
        <ColumnContainer style={{ 
            marginTop: '50px', 
            paddingLeft: '0px !important', 
            paddingRight: '0px !important' 
        }}>
            <BunTop />
            {
                burgerInfo.length > 0 ?
                burgerInfo.map((item, index) => cloneElement(ingredients[item], { key:  index})) :
                <Typography variant='h4' marginY={1}>Add Ingredients</Typography>
            }
            <BunBottom />
        </ColumnContainer>
    )
}

export default observer(Burger);