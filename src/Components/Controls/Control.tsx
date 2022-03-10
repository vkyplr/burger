import { Button, Grid, Paper, Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { grey } from '@mui/material/colors';

interface Props {
    addItem: (ingredient: number) => void,
    removeItem: (ingredient: number) => void,
    index: number,
    name: string,
    quantity: number,
    price: number,
    readonly: boolean
}

const Control = ({ addItem, index, name, quantity, removeItem, price, readonly }: Props) => {
    const theme = useTheme();
    return (
        <Paper 
            sx={{
                width:'100%', 
                minHeight: '16%',
                backgroundColor: theme.controlsBackground.primary,
                padding: '15px',
                marginBottom: '1.6%'
            }}
            elevation={3}
        >
            <Grid container justifyContent='space-between'>
                <Grid item>
                    <Grid container alignItems='center'>
                        <Typography 
                            variant='h4' 
                            fontWeight={600} 
                            color={grey[800]}
                            
                        >
                            {name}
                        </Typography>
                        <Typography 
                            variant='italic'
                            fontWeight={600} 
                            color={grey[800]}
                            marginLeft={1}
                        >
                            ₹{price}
                        </Typography>
                    </Grid>
                    <Grid container>
                        {readonly ? 
                        <Typography
                            variant='h5' 
                            color={grey[800]}
                            fontWeight={600}
                        >Quantity:</Typography> : 
                        <Grid item>
                            <Button 
                                size='small' 
                                color="error" 
                                variant="contained"
                                onClick={() => removeItem(index)}
                                disabled={quantity === 0}
                            >
                                Remove
                            </Button>
                        </Grid>}
                        <Grid item>
                            <Typography 
                                marginX={1} 
                                variant='h5' 
                                color={grey[800]}
                                fontWeight={600}
                            >
                                {quantity}
                            </Typography>
                        </Grid>
                        {!readonly && <Grid item>
                            <Button 
                                size='small' 
                                variant='contained' 
                                color='success'
                                onClick={() => addItem(index)}
                            >
                                Add
                            </Button>
                        </Grid>}
                    </Grid>
                </Grid>
                { quantity > 0 && 
                    <Grid 
                        item 
                        display='flex' 
                        flexDirection='column' 
                        alignSelf='end'
                        alignItems='center'
                    >
                    
                        <Typography 
                            color={grey[800]} 
                            variant='h5'
                            fontWeight={600}
                        >
                            Amount
                        </Typography>
                        <Typography 
                            color={grey[800]} 
                            variant='h6'
                            fontWeight={800}
                        >
                            ₹ {price * quantity}
                        </Typography>
                    </Grid>
                }
            </Grid>
        </Paper>
    )
}

export default Control;