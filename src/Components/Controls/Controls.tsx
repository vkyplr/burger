import { useContext, useState } from 'react';
import { 
    Typography, 
    Paper, 
    Button, 
    Dialog, 
    Box, 
    TextField, 
    DialogContent, 
    DialogActions, 
    DialogTitle, 
    Alert, 
    AlertTitle, 
    Snackbar 
} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import ColumnContainer from "../common/ColumnContainer";
import { Ingredients } from "../../constants/Ingredients";
import { RootStoreContext } from '../../RootStoreContext';
import Control from './Control';
import { observer } from "mobx-react-lite";
import { grey } from '@mui/material/colors';
import Customer from '../../interfaces/Customer';


const Controls = () => {

    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [customerName, setCustomerName] = useState<string>('');
    const [customerPhone, setCustomerPhone] = useState<string>('');
    const [customerNameError, setCustomerNameError] = useState<boolean>(false);
    const [customerPhoneError, setCustomerPhoneError] = useState<boolean>(false);
    
    const theme = useTheme();
    const { burgerStore, customerStore, orderStore } = useContext(RootStoreContext)
    const { 
        burgerInfo, 
        totalAmount,
        readonly,
        clearBurger, 
        addIngredient, 
        removeIngredient, 
        makeRegularBurger,
        saveBurger,
    } = burgerStore;
    const { totalOrders, addOrder } = orderStore;
    const { 
        totalCustomers,  
        addBurger,
        checkIfCustomerExists,
        addCustomer,
    } = customerStore;

    const handleClose = () => {
        setDialogOpen(false);
        setCustomerNameError(false);
        setCustomerPhoneError(false);
    }

    const handleSubmit = () => {
        let customerNameErrorLocal = customerName.length < 1;
        let customerPhoneErrorLocal = !(/^\d{10}$/.test(customerPhone));
        setCustomerNameError(customerNameErrorLocal);
        setCustomerPhoneError(customerPhoneErrorLocal);
        if (customerNameErrorLocal === false && customerPhoneErrorLocal === false) {
            clearBurger();
            let customer: boolean | Customer = checkIfCustomerExists(customerName, customerPhone);
            if (!customer) {
                customer = addCustomer({
                    id: totalCustomers,
                    name: customerName,
                    phone: customerPhone,
                    burgers: []
                })
            }
            // Save new Burger into Burger Store
            let burgerId = saveBurger(burgerInfo);
            addOrder({
                id: totalOrders + 1,
                customerId: customer.id,
                burgerId,
                totalAmount,
                date: new Date()
            });
            // Add new Burger to Customer Store
            addBurger(burgerId, customer.id);
            setSnackbarOpen(true);
            setDialogOpen(false);
        }
    }

    const handleSave = () => {
        setDialogOpen(true);
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    }

    return (
        <>
            <ColumnContainer 
                key='Controls' 
                style={{
                    paddingRight: '0px !important',
                    paddingLeft: '0px !important',
                    height: '100%'
                }}
            >
                {   !readonly ?
                    <>
                        <Button variant="customVariant" onClick={makeRegularBurger}>Make Regular Burger</Button>
                        <Typography variant="h6" fontWeight={700} marginY={1}>Or Customize yourself</Typography>
                    </> : <Typography marginY={1} variant='h4'>Order Summary</Typography>
                }
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
                            readonly={readonly}
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
                                Clear
                            </Button> 
                            {   !readonly &&
                                <Button
                                    variant="contained"
                                    color='success'
                                    onClick={handleSave}
                                    size='small'
                                >Save</Button> 
                            }
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
            <Dialog 
                maxWidth='sm'
                open={dialogOpen}
                onClose={handleClose}
            >
                <DialogContent >
                    <DialogTitle 
                        color={grey[800]} 
                        sx={{ padding: '10px 0px' }}
                    >Customer Details</DialogTitle>
                    <Box
                        component='form'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 'fit-content',
                            m: 'auto',
                            justifyContent: 'space-around'
                        }}
                        noValidate={false}
                    >
                        <TextField 
                            required={true}
                            error={customerNameError}
                            helperText={customerNameError ? 'Invaid Name' : ''}
                            size='small'
                            label='Name' 
                            variant='outlined'
                            onChange={(e) => setCustomerName(e.target.value)}
                            color='primary'
                            sx={{
                                borderColor: 'white',
                                marginBottom: 2
                            }}
                        />
                        <TextField 
                            required={true}
                            error={customerPhoneError}
                            helperText={customerPhoneError ? 'Invalid Phone Number' : ''}
                            size='small'
                            label='Phone' 
                            variant='outlined'
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            color='primary'
                            type='tel'
                            sx={{
                                borderColor: 'white'
                            }}
                        />
                    </Box>
                </DialogContent>
                <DialogActions >
                    <Button sx={{ fontWeight: 700 }} onClick={handleClose}>Close</Button>
                    <Button 
                        sx={{ fontWeight: 700 }} 
                        onClick={handleSubmit}
                        disabled={(!customerName.length || !customerPhone.length)}
                    >
                        Submit
                    </Button>
                </DialogActions>   
            </Dialog>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} variant='filled' severity='success' sx={{ width: '100%' }}>
                    <AlertTitle>Success</AlertTitle>
                    Order has Been Created Successfully
                </Alert>
            </Snackbar>
        </>
    )
}

export default observer(Controls);