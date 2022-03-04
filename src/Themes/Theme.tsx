import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#db0007",
                    height: 64
                }
            }
        }
    }
});

export default theme;