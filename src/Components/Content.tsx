import { Grid, styled } from "@mui/material";
import Burger from './Burger';

const ContainerGrid = styled(Grid)({
    marginTop: 64
});

const ItemGrid = styled(Grid)({
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
})

const Content = () => {
    return (
        <ContainerGrid container>
            <ItemGrid item lg={4} md={4} sm={12} xs={12}>
                
            </ItemGrid>
            <ItemGrid item lg={4} md={4} sm={12} xs={12}>
                <Burger />
            </ItemGrid>
            <ItemGrid item lg={4} md={4} sm={12} xs={12}>

            </ItemGrid>
        </ContainerGrid>
    )
}

export default Content;