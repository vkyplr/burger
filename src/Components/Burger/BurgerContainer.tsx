import { Typography } from "@mui/material";
import ColumnContainer from "../common/ColumnContainer";
import Burger from "./Burger";

const BurgerContainer = () => {
    return (
        <ColumnContainer style={{ paddingLeft: '0px !important', paddingRight: '0px !important' }}>
            <Typography variant="h2">Burger</Typography>
            <Burger />
        </ColumnContainer>
    );
}

export default BurgerContainer;