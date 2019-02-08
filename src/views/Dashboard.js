import React, { Component } from 'react';
import ObservationList from "../components/ObservationList";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { observations } = this.props;
    return (
      <div>
        <div className="CorpPic-box" style={{height:'12em'}}>
					<img src="images/background.png" width="100%" height="100%" alt="Background" />
				</div>
       <h1> This is final view for the Observation , multiple components used to make a single view . </h1>

        <ObservationList  observations = {observations}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
    return {
        observations: state.firestore.ordered.observations
    }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'observations', orderBy: ['createdAt', 'desc'] },
  ])
)(Dashboard);