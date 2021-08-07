import React from "react";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Portfolio from "./Portfolio";
import { CssBaseline } from "@material-ui/core";

const theme = createTheme({});
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2%"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Portfolio />
      </div>
    </ThemeProvider>
  );
}

export default App;
