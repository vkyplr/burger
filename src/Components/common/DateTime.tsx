import { Box } from '@mui/material';
import moment from 'moment';

interface Props {
    date: Date
}

const DateTime = ({ date }: Props) => {
    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <span>{moment(date).format('hh:mm A')}</span>
            <span>{moment(date).format('MMM DD, YYYY')}</span>
        </Box>
    );
}

export default DateTime;