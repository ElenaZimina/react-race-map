import { createAction, handleActions } from 'redux-actions'

/*
 * Constants
 * */
export const SET_FILTER = 'SET_FILTER';
export const SEARCH_RECIPE = 'SEARCH_RECIPE';
export const SET_ACTIVE_TOOL = 'SET_ACTIVE_TOOL';

/*
 * Actions
 * */
export const searchRecipe = createAction(SEARCH_RECIPE, (term) => term);

export const setFilter = createAction(SET_FILTER, (filterId) => filterId);

export const setActiveTool = createAction(SET_ACTIVE_TOOL, (id) => id);

export const actions = {
  searchRecipe,
  setActiveTool,
  setFilter
};

/*
 * State
 * */
export const initialState = {
  ids: [1, 2, 3, 4, 5],
  entities: {
    1: {
      id: 1,
      title: 'Start',
      count: 1
    },
    2: {
      id: 2,
      title: 'Finish',
      count: 1
    },
    3: {
      id: 3,
      title: 'Water'
    },
    4: {
      id: 4,
      title: 'Medicine'
    },
    5: {
      id: 5,
      title: 'Meals'
    }
  },
  activeId: null
};

/*
 * Reducers
 * */
export default handleActions({

  [SET_ACTIVE_TOOL]: (state, {payload: id}) => {
    return {
      ...state,
      activeId: id
    };
  },

  [SET_FILTER]: (state, {payload: filterId}) => {
    return {
      ...state,
      filter: filterId
    };
  },

  [SEARCH_RECIPE]: (state, {payload: term}) => {
    return {
      ...state,
      searchTerm: term
    }
  }

}, initialState);
