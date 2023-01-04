import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        primary: {
            500: "#e50914"
        },
        secondary: {
            200: "#737373",
            300: "#303030",
            400: "#222",
            500: "#000" 
        },
        accent: {
            500: "#fff"
        },
        blue: {
            500: "#0071eb"
        }
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: "normal",
                maxWidth: "fit-content",
                borderRadius: 3,
                alignItems: "center",
                gap: 1,
                paddingY: 4
            },
            defaultProps: {
                colorScheme: "primary",
                size: "sm"
            },
            variants: {
                primary: {
                    backgroundColor: "primary.500",
                    color: "#fff",
                    cursor: "pointer",
                },
                secondary: {
                    backgroundColor: "#00000000",
                    color: "#fff",
                    border: "1px solid #fff"
                }
            },
            sizes: {
                xs: {
                    fontSize: "sm",
                    h: "7",
                    minWidth: "fit-content",
                    px: "2"
                }
            }
        },
        Container: {
            baseStyle: {
                maxWidth: 1100,
                width: "100%"
            }
        },
        Text: {
            baseStyle: {
                color: "accent.500",
                lineHeight: 1,
                textAlign: "center"
            }
        }
    }
})