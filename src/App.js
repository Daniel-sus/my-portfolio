import React from "react";
import { Header, Sidebar } from "./components";
import { About, Projects, Stack, Experience } from "./pages";
import Snackbar from "@mui/material/Snackbar";
import "./app.scss";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { AppBar, CssBaseline } from "@mui/material";
import { themeSettings } from "./theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const App = () => {
  const mode = useSelector((state) => state.global.mode);
  console.log(mode);
  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="container">
          <div className="container__sidebar">
            <Sidebar />
          </div>
          <div className="container__main">
            <AppBar
              position="sticky"
              top="0"
              elevation={0}
              sx={{ backgroundColor: "background.default" }}
            >
              <Header handleClick={handleClick} />
            </AppBar>
            <div className="container__content">
              <About />
              <Projects />
              <Stack />
              <Experience />
            </div>
          </div>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              variant="outlined"
              severity="success"
              sx={{ width: "100%" }}
            >
              Email successfully copied to clipboard!
            </Alert>
          </Snackbar>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default App;
