import React, { Component } from 'react';
//import {ReactDOM} from 'react-dom';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import Button  from '@material-ui/core/Button';
import { TextField } from 'redux-form-material-ui';
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



class ObservationForm extends Component {
    state = {
        name: '',
        content: '',
        rarityStatus: '',
        open: false,
    };

 
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
      handleOpen = () => {
        this.setState({ open: true });
      };
    
  render() {
    //console.log(this.props.rarity);
    const { classes } = this.props;
    const { handleSubmit, reset, } = this.props;
    const rarityStatusArray = [
        {id: 1, label: "Common"},
        {id: 2, label: "Common"},
        {id: 3, label: "Common"},
    ],
  
    const rarityStatusOptions = 
          rarityStatusArray.map((rarityStatus, id) => 
      <MenuItem key={id} value={rarityStatus.id}>{rarityStatus.label}</MenuItem>);

    return ( 
        <form onSubmit={handleSubmit} autoComplete="off" >

            {/* <FormControl className={classes.formControl}>
                <InputLabel htmlFor="rarityStatusInputOfObservationForm">Rarity</InputLabel>
                <Select
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.state.rarityStatus}
                onChange={this.handleChange}
                inputProps={{
                    name: 'rarityStatus',
                    id:"rarityStatusInputOfObservationForm"
                }}
                >
                <MenuItem >
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"Common"}>Common</MenuItem>
                <MenuItem value={"Rare"}>Rare</MenuItem>
                <MenuItem value={"ex"}>Extremely Rare</MenuItem>
                </Select>
            </FormControl> */}

            <div>
                <Field
                    name="rarityStatus"
                    component={Select}
                    label="Rarity Status"
                    //style={styleRules.customWidth}
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
            {/* <div>
               
                <Field 
                    
                    label ="RarityStatus "
                    name ="rarityStatus"
                    id="nameInputOfObservationForm"
                    //ref="nameInputOfObservationForm"
                    component= {TextField}  type="text"
                    placeholder="Enter rarity" 
                    margin = 'normal'
                    variant  = 'outlined'
                /> 

            </div> */}

            <div>
               
               <Field 
                   
                   label ="Content "
                   name ="content"
                   id="contentInputOfObservationForm"
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
}}

ObservationForm.componentDidMount = () => {
    // Doesn't work, nor several other attempts of the same kind
    document.getElementById("nameInputOfObservationForm").focus();

    // Not allowed this way!
    // this.refs.nameInputOfObservationForm.focus(); 
}

ObservationForm = reduxForm({
    form: 'observationForm'
})(ObservationForm);

export default withStyles(styles)(ObservationForm);


ObservationForm.propTypes = {
    handleSubmit: PropTypes.func,
    // TODO: Find out if and how to use PropTypes check here?
    //pristine: PropTypes.bool,
}