import { Grid, styled } from "@mui/material";
import Burger from './Burger';
import Controls from "./Controls/";
import OrderTable from "./OrderTable";

const ContainerGrid = styled(Grid)({
    marginTop: 64
});

const ItemGrid = styled(Grid)({
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
});

const Content = () => {
    return (
        <ContainerGrid container minHeight='calc(100vh - 64px)'>
            <ItemGrid sx={{ height: 'calc(50vh + 64px)' }} item lg={4} md={4} sm={12} xs={12}>
                <OrderTable />
            </ItemGrid>
            <ItemGrid item lg={4} md={4} sm={12} xs={12}>
                <Burger />
            </ItemGrid>
            <ItemGrid item lg={4} md={4} sm={12} xs={12}>
                <Controls />
            </ItemGrid>
        </ContainerGrid>
    )
}

export default Content;