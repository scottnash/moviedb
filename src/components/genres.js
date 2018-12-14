import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';


class Genres extends Component {
  state={
    showMovieForm: false
  }

  renderGenres = () => {
    console.log(this.props.movies);
    const uniqueGenres = [...new Set( this.props.movies.map( movie => movie.genre ) ) ];

    return uniqueGenres.map( ( genre ) => {
      return (
        <li
          key={ genre }
          onClick= { ()=> this.props.filterMoviesByGenre( genre ) }
        >{ genre }</li>
      )
    })

  }

  render() {
    return (
      <Fragment>
        <h4>Genres</h4>
        <ul>
          { this.renderGenres() }
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

export default connect( mapStateToProps, actions )(Genres);
