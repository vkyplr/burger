import { useState, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { RootStoreContext } from '../RootStoreContext';

const Header = () => {

    const [currentTheme, setCurrentTheme] = useState("theme2");
    const { switchTheme: changeTheme } = useContext(RootStoreContext);

    const switchTheme = () => {
        changeTheme(currentTheme === "theme2" ? "theme1" : "theme2");
        setCurrentTheme(currentTheme === "theme2" ? "theme1" : "theme2")
    }

    return (
        <AppBar position="fixed">
            <Toolbar>
                <img src="./logo.png" height="50" alt="Logo" />
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
                    { currentTheme === "theme2" ? 
                    <Brightness7 htmlColor='white' /> : 
                    <Brightness4 htmlColor='white' /> }
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header;