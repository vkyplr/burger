import { Typography, Paper } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { useContext } from "react";
import { State } from "../../Context";
import ColumnContainer from "../common/ColumnContainer";

import Control from './Control';

const ingredientsMap = [
    'Onion', 'Cheese', 'Tomato', 'Lettuce', 'Patty'
]

const Controls = () => {
    
    const theme = useTheme();
    const { burgerInfo, addIngredient, removeIngredient } = useContext(State);

    return (
        <ColumnContainer style={{
            paddingRight: '0px !important',
            paddingLeft: '0px !important',
            height: '100%'
        }}>
            <Typography variant="h2">Controls</Typography>
            <Paper 
                sx={{
                    width:'100%', 
                    height: '100%',
                    backgroundColor: theme.redText,
                    padding: '20px'
                }} 
                elevation={2}
            >
                {ingredientsMap.map((item, index) => { 
                    let quantity = burgerInfo.filter(e => e === index).length;
                    return <Control 
                        key={index} 
                        addItem={addIngredient}
                        removeItem={removeIngredient}
                        name={item}
                        index={index}
                        quantity={quantity}
                    />
                })}
            </Paper>
        </ColumnContainer>
    )
}

export default Controls;