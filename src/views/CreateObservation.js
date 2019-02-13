import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import ObservationForm from '../components/ObservationForm';
import { createObservation } from "../store/actions/observationActions";
import PropTypes from 'prop-types';
import { compose } from 'redux';


class CreateObservation extends Component {
    state = {
        name: '',
        content: '',
        rarityStatus: '',
        open: false,
    };
    
  render() {
    
    return (
        
        <form autoComplete="off">
            <div>  
              <h1>Adding a new Observation</h1>
                <ObservationForm onSubmit={this.props.submit}/>
            </div>
      </form>
      
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
    classes: PropTypes.object.isRequired,
  };

export default compose(
  connect(null, mapDispatchToProps),
  )(CreateObservation);