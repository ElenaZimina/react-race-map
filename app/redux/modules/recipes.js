import { createAction, handleActions } from 'redux-actions'

/*
 * Constants
 * */
export const SET_FILTER = 'SET_FILTER';
export const SEARCH_RECIPE = 'SEARCH_RECIPE';
export const SET_ACTIVE_RECIPE = 'SET_ACTIVE_RECIPE';

/*
 * Actions
 * */
export const searchRecipe = createAction(SEARCH_RECIPE, (term) => term);

export const setFilter = createAction(SET_FILTER, (filterId) => filterId);

export const setActiveRecipe = createAction(SET_ACTIVE_RECIPE, (id) => id);

export const actions = {
  searchRecipe,
  setActiveRecipe,
  setFilter
};

/*
 * State
 * */
export const initialState = {
  ids: [0, 1],
  entities: {
    0: {
      id: 0,
      title: 'Carrot cake',
      ingredients: ['1 carrot', '200 ml sour cream'],
      image: 'http://www.inspiredtaste.net/wp-content/uploads/2016/06/Carrot-Cake-Recipe-3-1200.jpg',
      isFavorite: false
    },
    1: {
      id: 1,
      title: 'Tuna salad',
      ingredients: ['1 tuna', '1 cucumber'],
      image: 'http://img.taste.com.au/eHknY3V_/w643-h428-cfill/taste/2016/11/tuna-salad-94387-1.jpeg',
      isFavorite: false
    }
  },
  activeId: null,
  searchTerm: ''
};

/*
 * Reducers
 * */
export default handleActions({

  [SET_ACTIVE_RECIPE]: (state, {payload: id}) => {
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
