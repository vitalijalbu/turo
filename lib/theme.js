import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Archivo, sans-serif"
  },
  sizes:{
    sm: '80rem',
  },
  colors: {
    success: "#07432b",
    secondary: "#8e8e93",
    danger: "#ff3b30",
    warning: "#ffcc00",
    info: "#34aadc",
    light: "#eee",
    dark: "#000",
    gray: {
      "100": "#f7fafc",
      "200": "#c4c4c4",
      "300": "#979797",
      "400": "#cbd5e0",
      "500": "#a0aec0",
      "600": "#718096",
      "700": "#4a5568",
      "800": "#2d3748",
      "900": "#1a202c",
      "1000": "#000000",
      "outline": "#c4c4c4", // <-- add this line to customize the border color
    },
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "40px",
    "4xl": "48px",
    "5xl": "64px",
    "6xl": "96px",
  },
  components: {
    /*Button: {
      baseStyle: {
        fontWeight: "bold",
        letterSpacing: "wide",
      },
      sizes: {
        sm: {
          fontSize: "sm",
          padding: "0.5rem 1rem",
        },
        md: {
          fontSize: "md",
          padding: "0.75rem 1.5rem",
        },
        lg: {
          fontSize: "lg",
          padding: "1rem 2rem",
        },
      },
      variants: {
        solid: {
          bg: "primary",
          _hover: {
            bg: "secondary",
          },
        },
        outline: {
          border: "2px solid",
          borderColor: "primary",
          color: "primary",
          _hover: {
            bg: "primary",
            color: "white",
          },
        },
      },
    },*/
    Input: {
      baseStyle: {
        borderRadius: "9999px",
        _focus: {
          boxShadow: "none",
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "bold",
        lineHeight: "1.2",
      },
      sizes: {
        xs: {
          fontSize: "xs",
        },
        sm: {
          fontSize: "sm",
        },
        md: {
          fontSize: "md",
        },
        lg: {
          fontSize: "lg",
        },
        xl: {
          fontSize: "xl",
        },
        "2xl": {
          fontSize: "2xl",
        },
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: "9999px",
      },
      variants: {
        solid: {
          bg: "primary",
          color: "white",
        },
        outline: {
          border: "2px solid",
          borderColor: "primary",
          color: "primary",
        },
      },
    },
  },
});

export default theme;
