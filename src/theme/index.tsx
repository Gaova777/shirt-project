import { Shadows, createTheme } from "@mui/material";
import dark from "./dark";
import light from "./light";


type modes = "light" | "dark";

const shadows = Array.from({ length: 24 }, (_,i)=>`0 4px ${i}px 0`);

export const generateTheme = (mode: modes) => 
    createTheme({
        palette: mode === "light" ? light : dark,
        typography: {
            fontFamily: "'Roboto', sans-serif",
            button: {
                textTransform: "initial"
            },
            h2:{
                fontSize: "3rem",
            },
        },
        shadows:["none",...shadows] as Shadows,
        shape: { borderRadius: 8},
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536
            },
        },
        components: {
            MuiDialog: {
                defaultProps: {
                    sx: {
                        "& .MuiModal-backdrop": {
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            backdropFilter: "blur(3px)",
                        },
                    },
                },
             },

            MuiButton:{
                defaultProps:{
                    variant: "contained",
                    disableElevation: true,
                }
            },

            MuiStack:{
                defaultProps:{
                    useFlexGap: true,
                },
            },
            MuiListItemIcon:{
                defaultProps:{
                    sx:{
                        minWidth: 32,
                    }
                }
            }
        },

    });