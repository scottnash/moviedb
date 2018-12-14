import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {
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
            <span>{ movie.movieTitle }</span>
            <img src={ movie.movieURL } />
          </li>
        )
      }
    });
  }

  render() {
    return (
      <Fragment>
        <h4>Movies</h4>
        <ul className="MovieList">
          { this.renderMovies() }
        </ul>
      </Fragment>

    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    movies: state.movies,
    filter: state.filters
  }
}

export default connect( mapStateToProps )(Movies);
