import { createAction, handleActions } from 'redux-actions'
import uuid from 'uuid'
import {setActiveTool} from './tools'

/*
 * Constants
 * */
export const SET_MARKER = 'SET_MARKER';

/*
 * Actions
 * */

export const _setMarker = createAction(SET_MARKER, (object) => object);

export const setMarker = (object) => {
  return (dispatch, getState) => {
    const ids = getState().map.ids;
    if (object.id && ids.includes(object.id)) {
    
    } else {
      const id = uuid();
    }
    dispatch(_setMarker(object));
    dispatch(setActiveTool(null));
  }
}

export const actions = {
  setMarker
};

/*
 * State
 * */
export const initialState = {
  ids: [],
  entities: {}
};

/*
 * Reducers
 * */
export default handleActions({

  [SET_MARKER]: (state, {payload}) => {
    return {
      ...state
    };
  }
  
}, initialState);
