import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {

  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title: "Star Wars",
            poster: "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711"
          },
          {
            title: "DEADPOOL2",
            poster: "https://www.bleedingcool.com/wp-content/uploads/2018/05/Deadpool-2-poster-4-600x875.jpg?x70969"
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
