import { ADD_MOVIE, REMOVE_MOVIE } from 'actions/types';

export default function( state = [], action ) {
  switch(action.type) {
    case ADD_MOVIE:
      return [ ...state, action.payload ];
    case REMOVE_MOVIE:
      return state.map( ( movie ) => {
        if( movie.id !== action.payload ) {
          return movie;
        }
      })
    default:
      return state;
  }
}
