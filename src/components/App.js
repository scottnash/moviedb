import React, { Component } from 'react';
import './App.css';

import Genres from 'components/genres';
import MovieHeader from 'components/movieheader';
import Movies from 'components/movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside>
          <Genres />
        </aside>
        <article>
          <MovieHeader />
          <Movies />
        </article>
      </div>
    );
  }
}

export default App;
