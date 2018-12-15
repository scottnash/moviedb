import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class Movies extends Component {
  deleteMovie = ( id ) => {
    this.props.removeMovie( id );
  }


  renderMovies = () => {
    return this.props.movies.map( ( movie, index ) => {
      if( ( !this.props.filter.movieTitle ||
        movie.movieTitle.toLowerCase().indexOf( this.props.filter.movieTitle.toLowerCase())  > -1 )
        &&
        (
          !this.props.filter.movieGenre ||
          movie.genre.toLowerCase() === this.props.filter.movieGenre.toLowerCase()
        )
      ) {
        return (
          <li className="movieHolder" key = { movie.movieTitle + index }>
            <div className="movieDeleter" onClick={ ()=> this.deleteMovie( movie.id ) }>+</div>
            <span>{ movie.movieTitle }</span>
            <img src={ movie.moviePosterURL } />
          </li>
        )
      }
    });
  }

  render() {
    return (
      <div className="movieListHolder">
        <h4>Movies</h4>
        <ul className="MovieList">
          { this.renderMovies() }
        </ul>
      </div>

    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    movies: state.movies,
    filter: state.filters
  }
}

export default connect( mapStateToProps, actions )(Movies);
