import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const styles = theme => ({
  
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    marginTop: 60
  },
});

class tested extends React.Component {
  state = {
    age: '',
    open: false,
    rarityLevel: '',
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
    const { classes } = this.props;
    let rarityOptions = (rarity) => {
      return( 
      <div>
      { rarity && rarity.map(rareLevel => {
          return (
            <div>
              <MenuItem value="rareLevel" rareLevel={rareLevel}> 
                  {[0]}
              </MenuItem>
              <MenuItem value="rareLevel" rareLevel={rareLevel}>{[1]}</MenuItem>
              <MenuItem value="rareLevel" rareLevel={rareLevel}>{[2]}</MenuItem>  </div>
          )
      })}
      </div>
      )
    }

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'demo-controlled-open-select',
            }}
          >
            {rarityOptions}
          </Select>
        </FormControl>
      </form>
    );
  }
}

tested.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(tested);


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