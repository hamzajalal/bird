import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import observationReducer from './observationReducer';

//combines all reducers and exports them
const rootReducer =
  combineReducers({
    observation: observationReducer,

    form:formReducer,

  });

export default rootReducer;