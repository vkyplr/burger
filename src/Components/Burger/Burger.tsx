import ColumnContainer from "../common/ColumnContainer";
import ingredients, { BunTop, BunBottom } from "./ingredients";
import { cloneElement, useContext } from "react";
import { State } from "../../Context";

const Burger = () => {

    const { burgerInfo } = useContext(State);

    return (
        <ColumnContainer style={{ 
            marginTop: '50px', 
            paddingLeft: '0px !important', 
            paddingRight: '0px !important' 
        }}>
            <BunTop />
            {
                burgerInfo.length > 0 &&
                burgerInfo.map((item, index) => cloneElement(ingredients[item], { key:  index}))
            }
            <BunBottom />
        </ColumnContainer>
    )
}

export default Burger;