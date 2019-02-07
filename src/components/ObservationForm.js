// import default
import React from 'react';
//import {ReactDOM} from 'react-dom';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import Button  from '@material-ui/core/Button';
import { TextField } from 'redux-form-material-ui';


let ObservationForm = props => {
    const { handleSubmit, reset  } = props;

    return ( 
        <form onSubmit={handleSubmit} >
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
                   id="nameInputOfObservationForm"
                   //ref="nameInputOfObservationForm"
                   component= {TextField}  type="text"
                   placeholder="Enter Notes" 
                   margin = 'normal'
                   variant  = 'outlined'
               /> 

           </div>

            <div >
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
                    onClick={reset}>
                    Clear field
                </Button>
            </div>
        </form>
    );
}

ObservationForm.componentDidMount = () => {
    // Doesn't work, nor several other attempts of the same kind
    document.getElementById("nameInputOfObservationForm").focus();

    // Not allowed this way!
    // this.refs.nameInputOfObservationForm.focus(); 
}

ObservationForm = reduxForm({
    form: 'observationForm'
})(ObservationForm);

export default ObservationForm;


ObservationForm.propTypes = {
    handleSubmit: PropTypes.func,
    // TODO: Find out if and how to use PropTypes check here?
    //pristine: PropTypes.bool,
}