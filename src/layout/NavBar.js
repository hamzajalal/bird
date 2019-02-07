import React from "react";

import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Switch } from "@material-ui/core/es/index";
//import { withStyles } from "@material-ui/core/es/styles";
//import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Dashboard from '../views/Dashboard';
import CreateObservation from '../views/CreateObservation';

//import { styles } from "./navigatorStyles";

const NavBar = () => {
    //const { classes } = this.props;

    return (

        
          <AppBar >
            <Toolbar>
              
              <Link to='/' className="brand-logo" >
                Bird Association
              </Link>

              <Button disableRipple={true} component={Link} to="/create" color="secondary" >
                Add New Observation
                </Button>

                <Button disableRipple={true} component={Link} to="/tested" color="secondary" >
                test entry
                </Button>
              
             
            </Toolbar>
          </AppBar>

    );
  }


Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default NavBar;
