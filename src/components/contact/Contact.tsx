import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Email, GitHub, LinkedIn, YouTube } from "@material-ui/icons";
import pfp from "./pfp.jpg";

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    width: 60,
    height: 60,
    color: "primary",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    border: "7px solid #30476b",
  },
  header: {
    paddingTop: 10,
  },
  card: {
    paddingTop: "10%",
  },
}));
function Contact() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid
        container
        spacing={2}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <img src={pfp} alt={"me"} className={classes.image} />
        </Grid>
        <Grid item>
          <Tooltip title={"GitHub"}>
            <IconButton href={"https://github.com/GrantPerkins"}>
              <GitHub className={classes.largeIcon} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={"LinkedIn"}>
            <IconButton
              href={"https://www.linkedin.com/in/grant-perkins-35ba00170/"}
            >
              <LinkedIn className={classes.largeIcon} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={"Email"}>
            <IconButton href={"mailto:gcperkins@wpi.edu"}>
              <Email className={classes.largeIcon} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title={"YouTube"}>
            <IconButton
              href={"https://www.youtube.com/channel/UCbBPHIVcsizYd1IPcwIbL5g"}
            >
              <YouTube className={classes.largeIcon} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Contact;