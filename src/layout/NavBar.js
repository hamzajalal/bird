import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core/es/index";
//import { withStyles } from "@material-ui/core/es/styles";
//import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { styles } from './NavBarStyles';

const NavBar = (props) => {
  const { classes } = props;

    return (
          <AppBar color="primary" position="static">
            <Toolbar >
      
              <span className={classes.accentStyle} ></span>
                <Typography variant="h4" component={Link} to="/" className={classes.title} noWrap>Bird Association</Typography>

              <Button disableRipple={true} component={Link} to="/create" color="secondary" className={classNames(classes.customButton, classes.margin)}>
                <Typography variant="h5" >Add New Observation</Typography>
              </Button>
                           
            </Toolbar>
          </AppBar>
    );
  }


NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
