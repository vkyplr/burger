import { useContext, useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import BurgerStore from '../BurgerStore';

const Header = () => {

    const [currentTheme, setCurrentTheme] = useState("theme2")

    const switchTheme = () => {
        BurgerStore.switchTheme(currentTheme == "theme2" ? "theme1" : "theme2");
        setCurrentTheme(currentTheme == "theme2" ? "theme1" : "theme2")
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <img src="/logo.png" height="50" />
                <Typography 
                    sx={{ 
                        flexGrow: 1, 
                        marginLeft: '10px' 
                    }} 
                    color="white" 
                    variant="h5"
                >
                    Burger Maker
                </Typography>
                <IconButton onClick={switchTheme}>
                    { currentTheme == "theme2" ? 
                    <Brightness7 htmlColor='white' /> : 
                    <Brightness4 htmlColor='white' /> }
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default observer(Header);