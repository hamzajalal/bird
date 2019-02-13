import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { Typography } from '@material-ui/core';
import ObservationForm from '../components/ObservationForm';
import { createObservation } from "../store/actions/observationActions";
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  centerAlign: {
      textAlign: 'center'
  },
};

class CreateObservation extends Component {
    state = {
        name: '',
        content: '',
        rarityStatus: '',
        open: false,
    };
    
  render() {
    const { classes } = this.props;
    
    return (
        <form autoComplete="off">
            <div>  
                <Typography variant="h3" className={classes.centerAlign}>Adding a new Observation</Typography>
                    <ObservationForm onSubmit={this.props.submit}/>
            </div>
        </form>
    );
  }
}

//loads dispatch methods to components props
const mapDispatchToProps = dispatch => ({
    submit: (values, rarityStatus) => {
      dispatch(createObservation(values, rarityStatus));
      
      dispatch(reset('observationForm'));  // unique form name

    },
});

CreateObservation.propTypes = {

    submit: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };

export default compose(
  connect(null, mapDispatchToProps),
  )(withStyles(styles)(CreateObservation));
