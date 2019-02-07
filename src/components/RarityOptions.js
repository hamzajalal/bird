// import default
import React from 'react';
//import {ReactDOM} from 'react-dom';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';

import Select from 'redux-form-material-ui/lib/Select';
import { getRarity } from "../store/actions/observationActions";

import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const styles = {
    customWidth: {
      width: 400
  },
  };

  const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
  ];

  

let RarityOptions = props => {
   
    const {  classes } = props;
    const rarityOptions = 
    suggestions.map((label) => 
    <MenuItem className={classes.customWidth} >{label}</MenuItem>);

    return (

            <div>
                <Field
                    name="rarity"
                    component={Select}
                    label="Rarity"
                    //className={classes.customWidth}
                    variant="outlined">
                    {rarityOptions}
                </Field>
            </div>

   
    );
}

export default (withStyles(styles)(RarityOptions));


// const mapStateToProps = state => {
//     console.log(state);
//       return {
//           rarity: state.firestore.ordered.rarity
//       }
//   }

//   const mapDispatchToProps = dispatch => ({
 
//     getrarity: () => {
//         dispatch(getRarity())
//     },
// });

// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     firestoreConnect([
//       { collection: 'rarity'},
//     ])
//     )(withStyles(styles)(RarityOptions));

//export default ObservationForm;
