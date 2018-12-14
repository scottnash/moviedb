import { combineReducers } from 'redux';
import moviesReducer from 'reducers/movies';
import filtersReducer from 'reducers/filters';
export default combineReducers( {
  movies: moviesReducer,
  filters: filtersReducer
})
