import React from 'react';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 445,
    margin: 10,
  },
};
const ObservationSummary =({observation}) => {
   // const { classes } = props;
   
    return (
      <Card style={styles.card}>
        <CardActionArea>
          
          <CardContent>
            <div>
              <Typography gutterBottom variant="h5" component="h2">
                {observation.name}
              </Typography>

              <Typography component="h6">
                {observation.content}
              </Typography>

              <Typography component="h7">
                {observation.rarityStatus}
              </Typography>
              
              <Typography variant="p" >{ observation.createdAt.toDate().toString() }</Typography>
            </div>
          </CardContent>
        </CardActionArea>
        
        <CardActions>
          <Button size="small" color="primary">
            See Details
          </Button>
        </CardActions>
      </Card>
    );
  }

export default withStyles(styles)(ObservationSummary);