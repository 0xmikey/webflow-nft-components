import { createTheme } from "@mui/material";

const defaultStyles = {
    backgroundColor: "#ffffff",
    primaryColor: "#2986CC",
    primaryTextColor: "#1f1f1f",
    secondaryTextColor: "#9e9e9e",
    hintBackgroundColor: "#9e9e9e",
    buttonTextColor: "#ffffff",
    theme: "light",
    corners: "rounded"
}

const darkDefaultStyles = {
    // dark theme uses dialog auto-lightner so using #000 here
    backgroundColor: "#000000",
    primaryColor: "#2986CC",
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#9e9e9e",
    hintBackgroundColor: "#9e9e9e",
    buttonTextColor: "#ffffff",
    theme: "dark",
    corners: "rounded"
}

const getStyles = () => ({
    ...(window.STYLES?.theme === "dark" ? darkDefaultStyles : defaultStyles),
    ...window.STYLES
})

const makeStyles = () => ({
    ...getStyles(),
    buttonRadius: getStyles().corners === "squared" ? "2px" : "30px",
    dialogRadius: getStyles().corners === "squared" ? "2px" : "24px",
})

const {
    theme: mode,
    primaryColor,
    primaryTextColor,
    secondaryTextColor,
    hintBackgroundColor,
    buttonTextColor,
    backgroundColor,
    buttonRadius,
    dialogRadius
} = makeStyles()

export const theme = createTheme({
    palette: {
        mode,
        primary: {
            main: primaryColor,
            contrastText: buttonTextColor
        },
        grey: {
            500: secondaryTextColor
        }
    },
    spacing: [0, 4, 8, 16, 24, 32, 64],
    components: {
        MuiDialog: {
            styleOverrides: {
                container: {
                    color: primaryTextColor
                },
                paper: {
                    // to avoid horizontal scrolls
                    overflowY: "unset",
                    backgroundImage: "inherit",
                    backgroundColor: backgroundColor,
                    borderRadius: dialogRadius,
                    padding: "16px 24px",
                    margin: "16px"
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    color: primaryTextColor
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    overflowY: "visible"
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: "none"
                },
                contained: {
                    padding: "0.5rem 1.5rem",
                    color: buttonTextColor,
                    borderRadius: buttonRadius,
                    "&:hover": {
                        boxShadow: "none"
                    },
                },
            }
        },
        MuiSlider: {
            styleOverrides: {
                valueLabel: {
                    color: buttonTextColor,
                    backgroundColor: hintBackgroundColor
                }
            }
        }
    },
    typography: {
        fontFamily: '"Inter", San Francisco, Roboto, Helvetica, sans-serif',
        button: {
            color: buttonTextColor,
            fontSize: "1rem !important",
            textTransform: "none",
        },
        h1: {
            color: primaryTextColor,
            fontWeight: 700,
            lineHeight: 1.4,
            fontSize: "2rem"
        },
        h4: {
            color: primaryTextColor,
            fontWeight: 600,
            fontSize: "1.3rem",
            lineHeight: 1.4
        },
        subtitle1: {
            color: primaryTextColor,
        },
        subtitle2: {
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1.2
        }
    },
});
