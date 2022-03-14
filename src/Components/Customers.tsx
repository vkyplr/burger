import { observer } from "mobx-react-lite";
import { Grid, styled } from "@mui/material";
import CustomerList from "./CustomerList";
import CustomerOrderList from "./CustomerOrderList";
import { useContext, useEffect, useState } from "react";
import Burger from './Burger';
import { RootStoreContext } from "../RootStoreContext";

const ContainerGrid = styled(Grid)({
    marginTop: 64
});

const ItemGrid = styled(Grid)({
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
});

const Customers = () => {

    const { burgerStore } = useContext(RootStoreContext);
    const { clearBurger, burgerInfo } = burgerStore;

    useEffect(() => {
        return () => {
            clearBurger();
        }
    }, []);

    const [customerId, setCustomerId] = useState<number | null>(null);
    return (
        <ContainerGrid container minHeight='calc(100vh - 64px)'>
            <ItemGrid
                // sx={{ height: 'calc(60vh + 64px)' }} 
                item lg={4} md={4} sm={12} xs={12}
            >
                <CustomerList setCustomer={setCustomerId} />
            </ItemGrid>
            <ItemGrid item lg={4} md={4} sm={12} xs={12}>
                {customerId != null && <CustomerOrderList customerId={customerId} />}
            </ItemGrid>
            <ItemGrid item lg={4} md={4} sm={12} xs={12}>
                {burgerInfo.length && <Burger />}
            </ItemGrid>
        </ContainerGrid>
    )
}

export default observer(Customers);