import { combineReducers } from 'redux'
import map from './modules/map';
import tools from './modules/tools';

export default combineReducers({
  map,
  tools
})
