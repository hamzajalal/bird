import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import ObservationForm from '../components/ObservationForm';
import { createObservation } from "../store/actions/observationActions";
import PropTypes from 'prop-types';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
  
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
      marginTop: 60,
      marginLeft: 160,
    },
  });

class CreateObservation extends Component {
  
 
    
  render() {
    //console.log(this.props.rarity);
    const { classes } = this.props;
    
//This is an issue code... We need to access rareLevel here to get a menu work!
    // let rarityOptions = (rarity) => {
        
    //     return( 
    //     <div>
    //     { rarity && rarity.map(rarity => {
    //         return (
              
    //             <MenuItem rarity= {rarity.Rare} > 
    //                 {rarity.Rare}
    //             </MenuItem>
                 
    //         )
    //     })}
    //     </div>
    //     )
    //   }
    
    return (
          

            <div>  
              <h1>Adding a new Observation</h1>
                <ObservationForm onSubmit={this.props.submit}/>
            </div>
      
      
    );
  }
}

// const mapStateToProps = state => {
//     //console.log(state);
//       return {
//           rarity: state.firestore.ordered.rarity
//       }
//   }

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
  firestoreConnect([
      { collection: 'rarity' }
  ])
)(withStyles(styles)(CreateObservation));