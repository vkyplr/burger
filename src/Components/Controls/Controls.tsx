import { Typography, Paper, Button, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import useTheme from "@mui/material/styles/useTheme";
import { useContext } from "react";
import { State, Ingredients } from "../../Context";
import ColumnContainer from "../common/ColumnContainer";

import Control from './Control';

const Controls = () => {
    
    const theme = useTheme();
    const { 
        burgerInfo, 
        totalAmount,
        clearBurger, 
        addIngredient, 
        removeIngredient, 
        makeRegularBurger,
    } = useContext(State);

    return (
        <ColumnContainer key='Controls' style={{
            paddingRight: '0px !important',
            paddingLeft: '0px !important',
            height: '100%'
        }}>
            <Button 
                variant="contained"
                sx={{
                    backgroundColor: theme.controlsBackground.primary,
                    ':hover': {
                        backgroundColor: theme.controlsBackground.primary
                    },
                    color: grey[800],
                    fontWeight: 700,
                }}
                onClick={makeRegularBurger}
            >Regular Burger</Button>
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
                        sx={{
                            width:'100%',
                            padding: '15px',
                            marginBottom: '1.6%',
                            backgroundColor: 'transparent',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
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
                        >
                            Total: ₹ {totalAmount}
                        </Typography>  
                    </Paper>
                }
            </Paper>
        </ColumnContainer>
    )
}

export default Controls;