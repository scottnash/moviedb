import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import data from 'data';


class MovieHeader extends Component {
  constructor(props){
    super(props);
    this.state={
      showMovieForm: false,
      filteredMovieTitle: '',
      movie: this.blankMovie()
    }
  }

  componentDidMount() {
    this.props.prePopulateMovies( data );
  }


  blankMovie = () => {
    return {
      movieTitle: '',
      moviePosterURL: '',
      description: '',
      genre: ''
    }
  }

  handleAddMovieClick = () => {
    this.setState( { showMovieForm: true } )
  }

  handleAddMovieSubmit = ( e ) => {
    e.preventDefault();
    this.props.addMovie( this.state.movie );
      this.setState( {
        showMovieForm: false,
        movie: this.blankMovie()
      });
  }

  findMovieByTitle = ( e ) => {
   this.setState( { filteredMovieTitle: e.target.value })
    const movieTitle = e.target.value;

    this.props.filterMovies( movieTitle );
  }

  render() {
    return (
      <Fragment>
        <form className="findMovie">
          <input
            type="text"
            name="findbytitle"
            placeholder="Find movie"
            onChange={ this.findMovieByTitle }
            value={ this.state.filteredMovieTitle }
          />
        </form>
        <button className="addMovie" onClick={ this.handleAddMovieClick }>Add Movie</button>
        { this.state.showMovieForm &&
        <form className="addMovieForm" onSubmit={ this.handleAddMovieSubmit }>
          <h4>Add Movie</h4>
          <input
            type="text"
            placeholder="Movie Title"
            name="movieTitle"
            required={ true }
            value={ this.state.movie.movieTitle }
            onChange = { e =>  this.setState( { movie: { ...this.state.movie, movieTitle: e.target.value } } ) }
          />
          <input
            type="text"
            placeholder="Movie Poster URL"
            name="moviePoster"
            required={ true }
            value={ this.state.movie.moviePosterURL }
            onChange = { e =>  this.setState( { movie: { ...this.state.movie, moviePosterURL: e.target.value } } ) }
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={ this.state.movie.description }
            onChange = { e =>  this.setState( { movie: { ...this.state.movie, description: e.target.value } } ) }
          />
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            value={ this.state.movie.genre }
            onChange = { e =>  this.setState( { movie: { ...this.state.movie, genre: e.target.value } } ) }
          />
          <button>Save Movie</button>
        </form> }
      </Fragment>

    );
  }
}

export default connect( null, actions )(MovieHeader);
