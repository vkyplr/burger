import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

declare module '@mui/material/styles' {
    interface Theme {
        
    }
}

declare module '@mui/material/styles' {
    interface Theme {
        controlsBackground: {
            primary: string
        },
        redText?: string
    }
    interface ThemeOptions {
        controlsBackground?: {
            primary?: string
        },
        redText?: string
    }
}

const Theme1 = createTheme({
    palette: {
        
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1920,
            xl: 2460,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#db0007',
                    height: 64
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: grey[800]
                }
            }
        }
    },
    controlsBackground: {
        primary: '#FEBD53'
    },
    redText: '#db0007',
});

const Theme2 = createTheme({
 
    palette: {
        background: {
            default: '#1f1f2b'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1920,
            xl: 2460,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#db0007',
                    height: 64
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#fff"
                }
            }
        }
    },
    controlsBackground: {
        primary: '#FEBD53'
    },
    redText: '#db0007',
});

export { Theme1, Theme2 };