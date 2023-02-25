// mui theme settings
export const themeSettings = (mode) => {
  return {
    overrides: {
      MuiIconButton: {
        root: {
          "&:hover": {
            backgroundColor: "#ffffff",
          },
        },
      },
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: "#2f2f2f",
            },
            secondary: {
              main: "#ffffff",
              link: "#527ab7",
            },
            background: {
              default: "#2f2f2f",
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: "#ffffff",
            },
            secondary: {
              main: "#000000",
              link: "#527ab7",
            },
            background: {
              default: "#ffffff",
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
