import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import ObservationForm from './ObservationForm';
import { createObservation } from "../store/actions/observationActions";
import PropTypes from 'prop-types';

class CreateObservation extends Component {
    state = {
        title: '',
        content: '',
    }

  render() {
    return (
      <div>
        <h1>Adding a new Location</h1>
        <ObservationForm onSubmit={this.props.submit}
         />
      </div>
    );
  }
}

//loads dispatch methods to components props
const mapDispatchToProps = dispatch => ({
    submit: (values) => {
      dispatch(createObservation(values));
      
      dispatch(reset('observationForm'));  // unique form name

    },
});

CreateObservation.propTypes = {

    submit: PropTypes.func.isRequired,
  };


export default connect(null, mapDispatchToProps)(CreateObservation);