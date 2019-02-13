import React from 'react';
//import {ReactDOM} from 'react-dom';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import Button  from '@material-ui/core/Button';
import { TextField } from 'redux-form-material-ui';
import MenuItem from '@material-ui/core/MenuItem';
import Select from 'redux-form-material-ui/lib/Select';
import { styleRules } from './ObservationFormStyles';

const rarityStatusArray = [
    {id: 1, label: "Common"},
    {id: 2, label: "Rare"},
    {id: 3, label: "Extremely Rare"},
];

const validate = values => {
    const error = {};
    error.name = '';
    error.content = '';
    error.rarityStatus = '';

    if (values.name === undefined || values.name.length < 1 || values.name === '') {
        error.name = 'Please provide a name';
    }

    if (values.content === undefined || values.content.length < 1 || values.content === '') {
        error.content = 'Please provide a description of this specie';
    }

    if (values.rarityStatus === undefined) {
        error.rarityStatus = 'Please select the rarity of the specie';
    }
    return error;
};

let ObservationForm = props => {
    const { handleSubmit, reset  } = props;

    const rarityStatusOptions = 
          rarityStatusArray.map((rarityStatus, id) => 
      <MenuItem key={id} style={styleRules.customWidth} value={rarityStatus.label}>{rarityStatus.label}</MenuItem>);

    return ( 
        <form onSubmit={handleSubmit} style={styleRules.formControl}>

            <div>
                <Field
                    name="rarityStatus"
                    component={Select}
                    label="Rarity Status"
                    style={styleRules.customWidth}
                    variant="outlined">
                    {rarityStatusOptions}
                </Field>
            </div>
            
            <div>
                <Field 
                    label ="Name "
                    name ="name"
                    id="nameInputOfObservationForm"
                    //ref="nameInputOfObservationForm"
                    component= {TextField}  type="text"
                    placeholder="Enter a Name" 
                    margin = 'normal'
                    variant  = 'outlined'
                /> 
            </div>

            <div>  
               <Field
                   label ="Content "
                   name ="content"
                   rowsMax="6"
                   id="contentInputOfObservationForm"
                   //ref="nameInputOfObservationForm"
                   component= {TextField} 
                   placeholder="Enter Notes" 
                   margin = 'normal'
                   variant  = 'outlined'
               />
           </div>

            <div>
                <Button  
                   type="submit"
                   variant="contained" color="primary"
                   margin = "normal"
                   style={{marginRight: 25}}  
                    >
                    Add Observation
                </Button>
                
                <Button 
                    type="button"
                    variant="contained" color="secondary"
                    margin = "normal"
                    style={{marginLeft: 25}}
                    onClick={reset}
                    >
                    Clear field
                </Button>
            </div>
        </form>
    );
};

ObservationForm = reduxForm({
    form: 'observationForm',
    validate
})(ObservationForm);

export default (ObservationForm);

ObservationForm.propTypes = {
    handleSubmit: PropTypes.func,
    // TODO: Find out if and how to use PropTypes check here?
    //pristine: PropTypes.bool,
}