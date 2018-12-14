import { ADD_MOVIE, FILTER_MOVIETITLE, FILTER_GENRE } from 'actions/types';

export function addMovie( movie = { } ) {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export function filterMovies( movie = '' ) {
  return {
    type: FILTER_MOVIETITLE,
    payload: movie
  }
}

export function filterMoviesByGenre( genre = '' ) {
  return {
    type: FILTER_GENRE,
    payload: genre
  }
}
