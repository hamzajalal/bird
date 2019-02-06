import React from 'react';
// import ObservationSimpleCard from './ObservationSimpleCard';
//import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};
const ObservationSummary =({observation}) => {
   // const { classes } = props;
   
    return (
      <Card style={styles.card}>
        <CardActionArea>
          <CardMedia
            //className={classes.media}
            // image="/static/images/cards/contemplative-reptile.jpg"
            // title="Contemplative Reptile"
          />
          <CardContent>
              <div>
            <Typography gutterBottom variant="h5" component="h2">
              {observation.title}
            </Typography>
            <Typography component="p">
              {observation.content}
            </Typography>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }



export default withStyles(styles)(ObservationSummary);