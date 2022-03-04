import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <img src="/logo.png" height="50" />
            </Toolbar>
        </AppBar>
    )
}

export default Header;