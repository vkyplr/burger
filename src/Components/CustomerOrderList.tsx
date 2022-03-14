import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { RootStoreContext } from '../RootStoreContext';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import ColumnContainer from './common/ColumnContainer';
import DateTime from './common/DateTime';
import Order from '../interfaces/Order';

interface Props {
    customerId: number
}

const CustomerOrderList = ({ customerId }: Props) => {

    const { orderStore, customerStore, burgerStore } = useContext(RootStoreContext);
    const { allOrders } = orderStore;
    const { allCustomers } = customerStore;
    const { setBurgerReadOnly, setBurger } = burgerStore;

    const orderTableData = allOrders.filter((e: Order) => e.customerId === customerId);

    const columns: Array<GridColDef> = [
        { field: 'orderId', headerName: '#', flex: 1, headerAlign: 'center', align: 'center' },
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
            amount: `₹ ${totalAmount}`,
            date: <DateTime date={date} />,
        };
    })

    return (
        <ColumnContainer style={{
            paddingLeft: '0px !important',
            paddingRight: '0px !important',
            width: '100%',
            height: 'calc(60vh + 64px)'
        }}>
            <Typography variant='h4' marginY={1}>{allCustomers[customerId].name}'s Orders</Typography>
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
        </ColumnContainer>
    )
}

export default observer(CustomerOrderList);