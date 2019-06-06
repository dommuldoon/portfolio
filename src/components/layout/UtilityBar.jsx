import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  // layout: {
  //   width: "auto",
  //   marginLeft: theme.spacing.unit * 3,
  //   marginRight: theme.spacing.unit * 3,
  //   [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
  //     width: 1100,
  //     marginLeft: "auto",
  //     marginRight: "auto"
  //   }
  // },
  rightText: {
    marginLeft: "auto",
    marginRight: -24
  },
  cont: {
    display: "flex"
  }
});

const UtilityBar = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar variant="dense">
          <Container maxWidth="sm" className={classes.cont}>
            <Typography
              variant="span"
              color="inherit"
              className={classes.rightText}
            >
              Sitemap | Cookie Policy | Contact Us
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(UtilityBar);
