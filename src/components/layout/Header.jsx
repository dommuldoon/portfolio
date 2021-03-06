import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  title: {
    flexGrow: 1
  },
  navWrapper: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <AppBar position="static"> */}
        <Toolbar className={classes.toolbarMain}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dom Muldoon
          </Typography>
          <span className={classes.navWrapper}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Work</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Contact</Button>
          </span>
        </Toolbar>
      {/* </AppBar> */}
    </div>
  );
}
