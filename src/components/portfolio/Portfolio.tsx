import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import portfolio from "../../data/portfolio.json";
import PortfolioElement from "./PortfolioElement";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function Portfolio(): ReactElement {
  // const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {portfolio.map((value) => {
        return (
          <PortfolioElement
            name={value.name}
            link={value.link}
            image={value.image}
            description={value.description}
            technologies={value.technologies}
          />
        );
      })}
    </Grid>
  );
}

export default Portfolio;
