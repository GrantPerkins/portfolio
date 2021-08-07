import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import portfolio from "./portfolio.json";
import PortfolioElement from "./PortfolioElement";

const useStyles = makeStyles((theme) => ({}));

function Portfolio(): ReactElement {
  const classes = useStyles();
  return (
    <div>
      {portfolio.map((value) => {
        return (
          <PortfolioElement
            name={value.name}
            description={value.description}
            technologies={value.technologies}
          />
        );
      })}
    </div>
  );
}

export default Portfolio;
