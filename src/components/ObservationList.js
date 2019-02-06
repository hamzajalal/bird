import React from 'react';
import { Link } from 'react-router-dom';

import ObservationSummary from './ObservationSummary';

const ObservationList = ({observations}) => {
    return (
        <div className="Observation-list section">
        { observations && observations.map(observation => {
            return (
                <Link to= {'/observation/' + observation.id} key={observation.id}>
                    <ObservationSummary observation={observation} />
                </Link>
            )
        })}
        </div>
    )
}

export default ObservationList;