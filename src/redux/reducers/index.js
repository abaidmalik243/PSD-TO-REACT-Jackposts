import { combineReducers } from 'redux';
import myAppReducer from './myAppReducer';

const rootReducer = combineReducers({
  MyApp: myAppReducer,
});

export default rootReducer;