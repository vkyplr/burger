import { Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RootStoreContext } from "../../RootStoreContext";
import ColumnContainer from "../common/ColumnContainer";
import Burger from "./Burger";

const BurgerContainer = () => {
    const { burgerHeading } = useContext(RootStoreContext);
    return (
        <ColumnContainer style={{ paddingLeft: '0px !important', paddingRight: '0px !important' }}>
            <Typography variant="h2">{burgerHeading}</Typography>
            <Burger />
        </ColumnContainer>
    );
}

export default observer(BurgerContainer);