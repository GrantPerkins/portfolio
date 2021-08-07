import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import portfolio from "./portfolio.json";
import { Grid, List, ListItem, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));
type PortfolioElementProps = {
  name: string;
  description: string;
  technologies: string[];
};

function PortfolioElement(props: PortfolioElementProps) {
  const classes = useStyles();
  return (
    <div>
      <Typography variant={"h2"}>{props.name}</Typography>
      <Typography variant={"body1"}>{props.description}</Typography>
      <Typography variant={"h5"}>Technologies</Typography>
      <Grid container>
        {props.technologies.map((value) => {
          return (
            <Grid item xs={12}>
              <Typography variant={"body2"}>{value}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default PortfolioElement;
