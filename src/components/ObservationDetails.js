import React from 'react';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const styles = {
    leftAlign: {
        textAlign: 'left'
    },
    rightAlign: {
        textAlign: 'right'
    },
    centerAlign: {
        textAlign: 'center'
    },
    paper: {
        padding: 40,
        textAlign: 'center', 
    },
    firstPaper: {
        marginTop: 20
    },
  };

const ObservationDetails = (props) => {
    const { observation, classes } = props;
    if (observation) {
        return (
            <Grid container spacing={24} >
            <Paper className={[classes.paper, classes.firstPaper]}>
                <div >
                <Typography variant="h7" className={classes.rightAlign}>{ observation.rarityStatus }</Typography>
                    <Typography variant="h4" className={classes.leftAlign}>{ observation.name }</Typography>
                    
                    <Typography variant="h6" className={classes.leftAlign}>{ observation.content }</Typography>
                    <Typography variant="p" className={classes.leftAlign}>{ observation.createdAt.toDate().toString() }</Typography>             
                                      
                </div>
            </Paper> 
            </Grid>
        )
    } else {
        return (
            <div>
                <p> Loading Observation... </p>
            </div>
            )
    }
}

const mapStateToProps = (state, myProps) => {
    //console.log(state);
    const id = myProps.match.params.id;
    const observations = state.firestore.data.observations;
    const observation = observations ? observations[id] : null
    return {
        observation: observation
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'observations' }
    ])
)(withStyles(styles)(ObservationDetails));


