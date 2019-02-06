import React from 'react';
import PropTypes from 'prop-types'

const ObservationDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section observation-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title"> Title - {id}</span>
                <p>Lorem ipsum asasa;</p>
            </div>

            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by Hamza Jalal</div>
                <div>1st of November,2018</div>
            </div>
        </div>
    </div>
  )
}

ObservationDetails.propTypes = {

}

export default ObservationDetails;


