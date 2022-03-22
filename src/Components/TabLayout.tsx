import { Tab, Tabs, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useState, SyntheticEvent } from 'react';
import { AttachMoneyOutlined, PieChart, PercentOutlined } from '@mui/icons-material/';
import AdornmentSelectTextField from './AdornmentSelectTextField';


// Styled Components
const StyledTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        display: 'none'
    },
    // '& .MuiTabs-flexContainer': {
    //     borderBottom: '0.5px solid #494b50'
    // }
})

const StyledTab = styled(Tab)({
    fontSize: '16px',
    textTransform: 'none',
    fontWeight: 'bold',
    color: '#a3a3a3',
    borderBottom: '0.5px solid #494b50',
    '&.Mui-selected': {
        color: '#feffff',
        // marginBottom: '-1px',
        borderBottom: 'none',
        // borderBottom: '2.5px solid #27292c',
        '&:first-of-type': {
            borderLeft: 'none',
        },
    },
    borderRight: '1px solid #494b50',
    borderLeft: '1px solid #494b50',
    '&:not(:first-of-type)': {
        marginLeft: '-1px',
    },
    '&:last-of-type': {
        borderRight: 'none',
        flexGrow: 1,
    },
    position: 'relative',
});

const TextButton = styled('button')({
    textTransform: 'none',
    color: '#fff',
    padding: 0,
    background: 'transparent',
    border: 0,
    fontSize: '18px',
    marginLeft: '7px',
    marginRight: '7px',
    '&.active': {
        textDecoration: 'underline'
    },
    '&:first-of-type': {
        marginLeft: 0
    },
    cursor: 'pointer',
});


// Interfaces
interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}


// Components
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {/* {value === index && ( */}
            <Box sx={{ px: 3, py: 1 }}>
                {children}
            </Box>
            {/* )} */}
        </div>
    );
}

const TabLayout = () => {

    const [selectedOperation, setSelectedOperation] = useState<string>('buy');
    const [value, setValue] = useState<number>(0);

    const [quantity, setQuantity] = useState<string>('');

    const handleQuantityChange = (value: string) => {
        setQuantity(value);
    }

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const quantityAdormentOptions = [
        {
            value: 'dollars',
            iconElement: <AttachMoneyOutlined />
        },
        {
            value: 'shares',
            iconElement: <PieChart />
        },
        {
            value: 'percentage',
            iconElement: <PercentOutlined />
        },
    ]

    return (
        <Box sx={{
            marginTop: 20,
            width: '30%',
            marginLeft: 'auto',
            marginRight: 'auto',
            backgroundColor: '#27292c'
        }}>
            <Box
            >
                <StyledTabs value={value} onChange={handleChange}>
                    <StyledTab disableRipple label="Trade" />
                    <StyledTab disableRipple label="Active Trade" />
                    <StyledTab disableRipple label="" disabled />
                </StyledTabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box>
                    <TextButton
                        className={selectedOperation === 'buy' ? 'active' : ''}
                        onClick={() => setSelectedOperation('buy')}
                    >Buy</TextButton>
                    <TextButton
                        className={selectedOperation === 'sell' ? 'active' : ''}
                        onClick={() => setSelectedOperation('sell')}
                    >Sell</TextButton>
                </Box>
                <Box sx={{
                    paddingY: 1.5
                }}>
                    <AdornmentSelectTextField
                        options={quantityAdormentOptions}
                        onValueChange={(value) => handleQuantityChange(value)}
                        onAdornmentChange={(value) => { }}
                        label='Quantity'
                    />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography>Active Trade</Typography>
            </TabPanel>
        </Box>
    )
}

export default TabLayout;