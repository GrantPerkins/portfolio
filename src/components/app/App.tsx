import React from "react";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Portfolio from "../portfolio/Portfolio";
import { CssBaseline, Typography, Grid } from "@material-ui/core";
import Contact from "../contact/Contact";

const theme = createTheme({
  palette: {
    background: {
      default: "#30476b",
    },
    text: {
      primary: "#30476b",
    },
    primary: {
      main: "#30476b",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2%",
  },
  title: {
    display: "inline-flex",
    textAlign: "center",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Typography
          className={classes.title}
          variant={"h1"}
          color={"secondary"}
        >
          Grant Perkins' Portfolio
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Portfolio />
          </Grid>
          <Grid item xs={2}>
            <Contact />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
