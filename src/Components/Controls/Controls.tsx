import { useContext } from 'react';
import { Typography, Paper, Button, Divider } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import ColumnContainer from "../common/ColumnContainer";
import { Ingredients } from "../common/Ingredients";
import { RootStoreContext } from '../../RootStoreContext';
import Control from './Control';
import { observer } from "mobx-react-lite";


const Controls = () => {
    
    const theme = useTheme();
    const { burgerStore } = useContext(RootStoreContext)
    const { 
        burgerInfo, 
        totalAmount,
        clearBurger, 
        addIngredient, 
        removeIngredient, 
        makeRegularBurger,
    } = burgerStore;

    return (
        <ColumnContainer key='Controls' style={{
            paddingRight: '0px !important',
            paddingLeft: '0px !important',
            height: '100%'
        }}>
            <Button 
                variant="customVariant"
                onClick={makeRegularBurger}
            >Make Regular Burger</Button>
            <Typography variant="h6" fontWeight={700} marginY={1}>Or Customize yourself</Typography>
            <Divider />
            <Paper 
                sx={{
                    width:'100%', 
                    height: '100%',
                    backgroundColor: theme.redText,
                    padding: '20px'
                }} 
                elevation={2}
            >
                {Ingredients.map((item, index) => { 
                    let quantity = burgerInfo.filter(e => e === index).length;
                    return <Control 
                        key={index} 
                        addItem={addIngredient}
                        removeItem={removeIngredient}
                        name={item.name}
                        index={index}
                        quantity={quantity}
                        price={item.price}
                    />
                })}
                {totalAmount > 0 &&
                    <Paper 
                        variant='transparent'
                        elevation={0}
                    >
                        <Button
                            variant="contained"
                            color='warning'
                            onClick={clearBurger}
                            size='small'
                        >
                            Reset
                        </Button> 
                        <Button
                            variant="contained"
                            color='success'
                            onClick={clearBurger}
                            size='small'
                        >Save</Button> 
                        <Typography 
                            variant='h6' 
                            fontWeight={800}
                            color='white'
                        >
                            Total: ₹ {totalAmount}
                        </Typography>  
                    </Paper>
                }
            </Paper>
        </ColumnContainer>
    )
}

export default observer(Controls);