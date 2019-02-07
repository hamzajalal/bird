import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firestoreReducer } from 'redux-firestore';
import observationReducer from './observationReducer';

//combines all reducers and exports them
const rootReducer =
  combineReducers({
    observation: observationReducer,
    firestore: firestoreReducer,
    form:formReducer,

  });

export default rootReducer;