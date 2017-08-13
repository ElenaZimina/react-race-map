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

export const _setMarker = createAction(SET_MARKER, (ids, entities) => {
  return {ids, entities}
});

export const setMarker = (object) => {
  return (dispatch, getState) => {
    const state = getState().map;
    const stateIds = state.ids;
    const stateEntities = state.entities;

    const marker = {};
    let id = object.id;
    if (id && stateIds.includes(id)) {

    } else {
      id = uuid();
    }
    marker[id] = object;
    marker[id]['id'] = id;

    const ids = stateIds.concat(id);
    const entities = Object.assign({}, stateEntities, marker)
    dispatch(_setMarker(ids, entities));
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
    const {ids, entities} = payload
    return {
      ...state,
      ids,
      entities
    };
  }

}, initialState);
