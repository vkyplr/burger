import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import type {} from '@mui/x-data-grid/themeAugmentation';

declare module '@mui/material/styles' {
    interface Theme {
        controlsBackground: {
            primary: string
        },
        redText?: string,
        greyBg: string
    }
    interface ThemeOptions {
        controlsBackground?: {
            primary?: string
        },
        redText?: string,
        greyBg?: string
    }
    interface TypographyVariants {
        italic: React.CSSProperties
    }
    interface TypographyVariantsOptions {
        italic?: React.CSSProperties
    }

}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        italic: true
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        customVariant: true
    }
}

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        transparent: true
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
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: 'orange',
                }
            }
        },
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'transparent' },
                    style: {
                        width:'100%',
                        padding: '15px',
                        marginBottom: '1.6%',
                        backgroundColor: 'transparent',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }
                }
            ]
        },
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
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'customVariant' },
                    style: {
                        backgroundColor: '#FEBD53',
                        ':hover': {
                            backgroundColor: '#FEBD53'
                        },
                        color: grey[800],
                        fontWeight: 700,
                    }
                }
            ]
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    backgroundColor: '#db0007',
                    color: 'white',
                },
                "columnHeader": {
                    color: 'white'
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    color: 'white'
                }
            }
        },
    },
    controlsBackground: {
        primary: '#FEBD53'
    },
    redText: '#db0007',
    typography: {
        italic: {
            fontStyle: 'italic'
        }
    }
});

const Theme2 = createTheme({
 
    palette: {
        background: {
            default: '#2d2d33'
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
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: 'orange',
                }
            }
        },
        MuiPaper: {
            variants: [
                {
                    props: { variant: 'transparent' },
                    style: {
                        width:'100%',
                        padding: '15px',
                        marginBottom: '1.6%',
                        backgroundColor: 'transparent',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }
                }
            ]
        },
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
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'customVariant' },
                    style: {
                        backgroundColor: '#FEBD53',
                        ':hover': {
                            backgroundColor: '#FEBD53'
                        },
                        color: grey[800],
                        fontWeight: 700,
                    }
                }
            ]
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    backgroundColor: '#db0007',
                    color: 'white',
                },
                "columnHeader": {
                    color: 'white'
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    color: 'white'
                }
            }
        },
    },
    controlsBackground: {
        primary: '#FEBD53'
    },
    redText: '#db0007',
    typography: {
        italic: {
            fontStyle: 'italic'
        }
    },
    greyBg: '#181818'
});

export { Theme1, Theme2 };