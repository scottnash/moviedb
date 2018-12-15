import { ADD_MOVIE, FILTER_MOVIETITLE, FILTER_GENRE, PREPOPULATE_MOVIES, REMOVE_MOVIE } from 'actions/types';

export function prePopulateMovies( movies = [] ) {
  return {
    type: PREPOPULATE_MOVIES,
    payload: movies
  }
}

export function addMovie( movie = { } ) {
  return {
    type: ADD_MOVIE,
    payload: movie
  }
}

export function removeMovie( id = 0 ) {
  return {
    type: REMOVE_MOVIE,
    payload: id
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
