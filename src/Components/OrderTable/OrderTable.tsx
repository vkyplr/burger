import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { RootStoreContext } from '../../RootStoreContext';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ColumnContainer from '../common/ColumnContainer';
import DateTime from '../common/DateTime';

const OrderTable = () => {

    const { orderStore, customerStore, burgerStore } = useContext(RootStoreContext);
    const { allOrders, totalEarnings } = orderStore;
    const { allCustomers } = customerStore;
    const { setBurgerReadOnly } = burgerStore;
    
    const orderTableData = [...allOrders]

    const columns: Array<GridColDef> = [
        { field: 'orderId', headerName: '#', flex: 1, headerAlign: 'center', align: 'center' },
        { field: 'customerName', headerName: 'Customer', flex: 2, headerAlign: 'center', align: 'center' },
        { field: 'amount', headerName: 'Amount', flex: 2, headerAlign: 'center', align: 'center' },
        { 
            field: 'date', 
            headerName: 'Date & Time', 
            flex: 2, 
            headerAlign: 'center', 
            align: 'center',
            renderCell: (params) => <DateTime date={params.value.props.date} />
        }
    ];

    const rows: GridRowsProp = orderTableData.reverse().map(({ id, customerId, burgerId, date, totalAmount }) => {
        return {
            id: burgerId,
            orderId: id,
            customerName: allCustomers[customerId].name,
            amount: `₹ ${totalAmount}`,
            date: <DateTime date={date} />,
        };
    })

    return (
        <ColumnContainer  style={{
            paddingLeft: '0px !important', 
            paddingRight: '0px !important',
            width: '100%',
            height: 'calc(60vh + 64px)'
        }}>
            <Typography variant='h4' marginY={1}>Orders</Typography>
            <DataGrid 
                onRowClick={({ id, row }) => setBurgerReadOnly(Number(id), row.orderId)} 
                sx={{ 
                    width: '100%',
                    flex: 2
                }} 
                disableColumnMenu={true} 
                columns={columns} 
                rows={rows}
                hideFooterSelectedRowCount={true}
            />
            <Typography marginTop={4} variant="h4">Total Earnings: ₹ {totalEarnings}</Typography>
        </ColumnContainer>
    )
}

export default observer(OrderTable);