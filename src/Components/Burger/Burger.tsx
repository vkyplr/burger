import ColumnContainer from "../common/ColumnContainer";
import ingredients, { BunTop, BunBottom } from "./ingredients";
import { cloneElement, useContext } from "react";
import { Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../RootStoreContext";

const Burger = () => {
    const { burgerStore } = useContext(RootStoreContext);
    const { burgerInfo } = burgerStore;
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