import { createAction, handleActions } from 'redux-actions'
import uuid from 'uuid'
import {setActiveTool} from './tools'

/*
 * Constants
 * */
export const SET_MARKER = 'SET_MARKER';
export const SAVE_POPUP_TEXT = 'SAVE_POPUP_TEXT';

/*
 * Actions
 * */

export const _setMarker = createAction(SET_MARKER, (ids, entities) => {
  return {ids, entities}
});

export const savePopupText = createAction(SAVE_POPUP_TEXT, (id, text) => {
  return {id, text}
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
  setMarker,
  savePopupText
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
    const {ids, entities} = payload;
    return {
      ...state,
      ids,
      entities
    };
  },
  
  [SAVE_POPUP_TEXT]: (state, {payload}) => {
    const {id, text} = payload;
    return {
      ...state,
      entities: {
        ...state.entities,
        [id]: {
          ...state.entities[id],
          text,
          isEditText: false
        }
      }
    };
  }

}, initialState);
