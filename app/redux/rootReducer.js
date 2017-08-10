import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import recipes from './modules/recipes';

export default combineReducers({
  routing,
  recipes
})
