import { useState, useContext } from 'react';
import { AppBar, Menu, Box, IconButton, Toolbar, Typography, MenuItem } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { RootStoreContext } from '../RootStoreContext';
import MenuIcon from '@mui/icons-material/Menu'; 
import { Link } from 'react-router-dom';
const Header = () => {

    const [currentTheme, setCurrentTheme] = useState("theme2");
    const { switchTheme: changeTheme } = useContext(RootStoreContext);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const switchTheme = () => {
        changeTheme(currentTheme === "theme2" ? "theme1" : "theme2");
        setCurrentTheme(currentTheme === "theme2" ? "theme1" : "theme2")
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <img src="./logo.png" height="50" alt="Logo" />
                <Link to='/'>
                    <Typography 
                        noWrap
                        component='div'
                        sx={{ 
                            marginLeft: '10px',
                            mr: 2,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            }
                        }} 
                        color="white" 
                        variant="h5"
                    >
                        Burger Maker
                    </Typography>
                </Link>
                <Box sx={{
                    flexgrow: 1,
                    display: {
                        mx: 'flex',
                        md: 'none'
                    }
                }}>
                    <IconButton
                        size='large'
                        onClick={handleOpenNavMenu}
                        color='inherit'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id='menu-appbar'
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: {
                                xs: 'block',
                                md: 'none'
                            }
                        }}
                    >
                        <MenuItem  key='home' onClick={handleCloseNavMenu}>
                            <Link to="/">
                                <Typography textAlign='center' color='white'>Home</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem  key='customers' onClick={handleCloseNavMenu}>
                            <Link to="customers">
                                <Typography textAlign='center' color='white'>Customers</Typography>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Link to="/">
                        <Typography marginX={1} textAlign='center' color='white'>Home</Typography>
                    </Link>
                    <Link to="customers">
                        <Typography marginX={1} textAlign='center' color='white'>Customers</Typography>
                    </Link>
                </Box>
                <Link to="/">
                    <Typography 
                        noWrap
                        component='div'
                        sx={{ 
                            marginLeft: '10px',
                            mr: 2,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }} 
                        color="white" 
                        variant="h5"
                    >
                Burger Maker
                    </Typography>
                </Link>
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