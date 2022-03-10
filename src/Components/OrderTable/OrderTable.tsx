import { observer } from 'mobx-react-lite';
import { createElement, useContext } from 'react';
import { RootStoreContext } from '../../RootStoreContext';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import moment from 'moment';
import { Divider, Typography } from '@mui/material';
import ColumnContainer from '../common/ColumnContainer';

const OrderTable = () => {

    const { orderStore, customerStore, burgerStore } = useContext(RootStoreContext);
    const { allOrders } = orderStore;
    const { allCustomers } = customerStore;
    const { setBurgerReadOnly } = burgerStore;
    
    const orderTableData = [...allOrders]

    const columns: Array<GridColDef> = [
        { field: 'orderId', headerName: '#', flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'customerName', headerName: 'Customer', flex: 2, headerAlign: 'center', align: 'center' },
        { field: 'amount', headerName: 'Amount', flex: 2, headerAlign: 'center', align: 'center' },
        { field: 'date', headerName: 'Date & Time', flex: 2, headerAlign: 'center', align: 'center' }
    ];

    const rows: GridRowsProp = orderTableData.reverse().map(({ id, customerId, burgerId, date, totalAmount }) => {
        return {
            id: burgerId,
            orderId: id,
            customerName: allCustomers[customerId].name,
            amount: totalAmount,
            date: moment(date).format('hh:mm A') + ' ' + moment(date).format('MMM DD'),
        };
    })

    return (
        <ColumnContainer  style={{
            paddingLeft: '0px !important', 
            paddingRight: '0px !important',
            width: '100%'
        }}>
            <Typography variant='h4' marginY={1}>Orders</Typography>
            <DataGrid 
                onRowClick={({ id, row }) => setBurgerReadOnly(Number(id), row.orderId)} 
                sx={{ width: '100%' }} 
                disableColumnMenu={true} 
                columns={columns} 
                rows={rows} 
                disableSelectionOnClick={true}
                disableColumnSelector={true}
            />
        </ColumnContainer>
    )
}

export default observer(OrderTable);