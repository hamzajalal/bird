import React from "react";

import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Switch } from "@material-ui/core/es/index";
//import { withStyles } from "@material-ui/core/es/styles";
//import classNames from 'classnames';
import Button from '@material-ui/core/Button';


const NavBar = () => {
  //const { classes } = this.props;

    return (
        
          <AppBar >
            <Toolbar>
            
              <Link to='/' className="brand-logo" >
                <Typography variant="h4" >Bird Association</Typography>
              </Link>

              <Button disableRipple={true} component={Link} to="/create" color="secondary" >
              <Typography variant="h5" >Add New Observation</Typography>
              </Button>
                           
            </Toolbar>
          </AppBar>

    );
  }


NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (NavBar);
