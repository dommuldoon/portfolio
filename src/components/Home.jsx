import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MailOutline from "@material-ui/icons/MailOutline";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ChevronRight from "@material-ui/icons/ChevronRight";

const styles = theme => ({
  // root: {
  //   background: "#4A2783",
  //   color: "white",
  //   padding: 5
  // },
  // renew: {
  //   color: "white",
  //   background: "#713F98"
  // }
  divider: {
    width: "30%",
    borderTop: "5px solid grey",
    marginTop: "20px",
    marginBottom: "20px"
  },
  container: {
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center"
  }
});

class Home extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h2">
          Dom Muldoon UI/Frontend/Js developer based in Dublin, Ireland
        </Typography>
        <hr className={classes.divider} />
        <Button variant="outlined" className={classes.button}>
          <MailOutline /> Contact Me
        </Button>
      </Container>
    );
  }
}

export default withStyles(styles)(Home);
