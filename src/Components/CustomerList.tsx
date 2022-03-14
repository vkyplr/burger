import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { RootStoreContext } from '../RootStoreContext';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ColumnContainer from './common/ColumnContainer';
import { Ingredients } from '../constants/Ingredients';

interface Props {
    setCustomer: (customerId: number) => void;
}

const CustomerList = ({ setCustomer }: Props) => {

    const { customerStore, burgerStore } = useContext(RootStoreContext);
    const { allCustomers } = customerStore;
    const { burgers } = burgerStore;

    const customerListData = [...allCustomers]

    const getTotalOrdersAmount = (customerBurgerIds: Array<number>) => {
        let totalOrdersAmount: number = 0;
        for (let i = 0; i < customerBurgerIds.length; i++) {
            let customerBurger: Array<number> = burgers[customerBurgerIds[i]].info;
            for (let j = 0; j < customerBurger.length; j++) {
                totalOrdersAmount += Ingredients[customerBurger[j]].price;
            }
        }
        return totalOrdersAmount;
    }

    const columns: Array<GridColDef> = [
        { field: 'customerId', headerName: '#', flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'customerName', headerName: 'Customer Name', flex: 2, headerAlign: 'center', align: 'center' },
        { field: 'contact', headerName: 'Phone Number', flex: 2, headerAlign: 'center', align: 'center' },
        { field: 'earnings', headerName: 'Total Orders', flex: 2, headerAlign: 'center', align: 'center' },
    ];

    const rows: GridRowsProp = customerListData.reverse().map(({ id, name, phone, burgers }) => {
        return {
            id,
            customerId: id + 1,
            customerName: name,
            contact: phone,
            earnings: `₹ ${getTotalOrdersAmount(burgers)}`
        };
    });

    return (
        <ColumnContainer style={{
            paddingLeft: '0px !important',
            paddingRight: '0px !important',
            width: '100%',
            height: 'calc(60vh + 64px)'
        }}>
            <Typography variant='h4' marginY={1}>Customers</Typography>
            <DataGrid
                onRowClick={({ row }) => { setCustomer(row.id) }}
                sx={{
                    width: '100%',
                    flex: 2
                }}
                disableColumnMenu={true}
                columns={columns}
                rows={rows}
                hideFooterSelectedRowCount={true}
            />
        </ColumnContainer>
    )
}

export default observer(CustomerList);