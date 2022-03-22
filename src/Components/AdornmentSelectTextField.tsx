import { ReactNode, useState, useRef, useEffect } from "react";
import { styled } from '@mui/system';
import {
    Box,
    IconButton,
    InputAdornment,
    TextField,
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon
} from "@mui/material";


const TextFieldWithSelectableAdornment = styled(TextField)({
    '& label.Mui-focused': {
        color: '#a1a1a2',
        fontWeight: 'bold'
    },
    '& .MuiInputLabel-root': {
        color: '#a1a1a2',
        fontWeight: 'bold'
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#a1a1a2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#a1a1a2',
        },
        '&:hover fieldset': {
            borderColor: '#a1a1a2',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#a1a1a2',
        },
        borderRadius: 10,
        color: 'white'
    },
});

const MenuListStyled = styled(MenuList)({
    width: '150px',
    borderRadius: 8,
    backgroundColor: '#FFF',
    position: 'absolute',
    marginLeft: '14px',
    marginTop: '-8px'
})

const MenuItemStyled = styled(MenuItem)({
    fontWeight: 400,
    fontSize: 14,
    paddingLeft: 10,
    height: 32,
    '& .MuiTypography-root': {
        color: 'black'
    },
    '&:hover': {
        background: 'linear-gradient(101.95deg, #1D5CFF 5.85%, #00A9FF 95.35%);',
        '& .MuiListItemIcon-root': {
            color: '#FFF'
        },
        '& .MuiTypography-root': {
            color: '#FFF'
        },
    }
})


interface AdornmentSelectTextFieldProps {
    options: Array<{ value: string, iconElement: ReactNode }>,
    onValueChange: (value: string) => void,
    onAdornmentChange: (value: string) => void,
    label: string
}


const AdornmentSelectTextField = ({ options, onValueChange, onAdornmentChange, label, ...otherProps }: AdornmentSelectTextFieldProps) => {

    const node = useRef<HTMLUListElement | null>(null)

    // Track events outside scope
    const clickOutside = (e: any) => {
        // if (node?.current?.contains) {
        if (node?.current?.contains(e.target)) return;
        // }
        setAdornmentListOpen(false);
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);

        // clean up function before running new effect
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    })

    const [selectedAdornment, setSelectedAdornment] = useState<string>(options[0].value);
    const [adornmentListOpen, setAdornmentListOpen] = useState<boolean>(false);
    const [labelState, setLabelState] = useState<string>('');
    const [placeholderState, setPlaceholderState] = useState<string>(label);

    const handleFocus = () => {
        setLabelState(label);
        setPlaceholderState('');
    }

    const handleBlur = (e: any) => {
        setPlaceholderState(label);
        if (e.target.value === '') { setLabelState(''); }
    }

    const getAdornmentIcon = (name: string) => {
        const icons = options.filter(e => e.value === name);
        return icons[0].iconElement
    }

    const handleAdornmentChange = (name: string) => {
        setSelectedAdornment(name);
        setAdornmentListOpen(false);
        onAdornmentChange(name);
    }

    const listItems = options.map((e, index) => {
        return <MenuItemStyled key={index} onClick={() => handleAdornmentChange(e.value)}>
            <ListItemIcon sx={{ color: 'black' }}>{e.iconElement}</ListItemIcon>
            <ListItemText>{e.value[0].toUpperCase() + e.value.slice(1)}</ListItemText>
        </MenuItemStyled>
    });

    return (
        <Box>
            <TextFieldWithSelectableAdornment
                label={labelState}
                placeholder={placeholderState}
                onFocus={() => handleFocus()}
                onBlur={(e) => handleBlur(e)}
                variant='outlined'
                InputProps={{
                    startAdornment: <InputAdornment position='start'>
                        <IconButton
                            sx={{
                                color: '#FFF',
                                height: '32px',
                                width: '32px'
                            }} onClick={() => setAdornmentListOpen(!adornmentListOpen)}>
                            {getAdornmentIcon(selectedAdornment)}
                        </IconButton>
                    </InputAdornment>
                }}
                onChange={(e) => { onValueChange(e.target.value) }}
            />
            {adornmentListOpen &&
                <MenuListStyled ref={node}>{listItems}</MenuListStyled>
            }
        </Box>
    )
}

export default AdornmentSelectTextField;