import React from "react";

import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Switch } from "@material-ui/core/es/index";
//import { withStyles } from "@material-ui/core/es/styles";
//import classNames from 'classnames';
import Dashboard from '../views/Dashboard';

//import { styles } from "./navigatorStyles";

const NavBar = () => {
    //const { classes } = this.props;

    return (

        
          <AppBar >
            <Toolbar>
              
              <Link to='/' className="brand-logo" >
                Bird Association
              </Link>
              
             
            </Toolbar>
          </AppBar>

    );
  }


Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default NavBar;
