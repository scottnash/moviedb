import { ADD_MOVIE, REMOVE_MOVIE, PREPOPULATE_MOVIES } from 'actions/types';

export default function( state = [], action ) {
  switch(action.type) {
    case PREPOPULATE_MOVIES:
      return action.payload;
    case ADD_MOVIE:
      return [ ...state, action.payload ];
    case REMOVE_MOVIE:
      return state.filter( ( movie ) => movie.id !== action.payload )
    default:
      return state;
  }
}
