import { Component } from "react";


import axios from 'axios';
import SearchBar from './SearchBar';
import City from './City';
import Weather from './Weather';
import Movies from './Movies.js';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
      errorMessage: '',
      weather: [],
      movies: [],
    }
  }

  getLocation = async () => {
    const locationUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

    try {
      const locationResponse = await axios.get(locationUrl);
      const location = locationResponse.data[0];

      this.setState({
        location,  // location:location
        error: false,
      });
      console.log(location);
    } catch (error) {
      console.error('Unable to find city', this.state.searchQuery);

      this.setState({ error: true, errorMessage: error.message});
    }
  }

  getWeather = async () => {
    const weatherUrl = `http://localhost:3001/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;

    try {
      const weatherResponse = await axios.get(weatherUrl);
      const weather = weatherResponse.data;

      this.setState({
        weather,  // weather:weather
        error: false,
      });
      console.log(weather);
    } catch (error) {
      console.error('Unable to find city', this.state.searchQuery);

      this.setState({ error: true, errorMessage: error.message});
    }
  }

  getMovies = async () => {
    const moviesUrl = `http://localhost:3001/movies?searchQuery=${this.state.searchQuery}`
    try {

      const moviesResponse = await axios.get(moviesUrl);
      const movies = moviesResponse.data;

      this.setState({

        movies, 
        error: false,
      });
    } catch (error) {
      console.error('Unable to find movie data', this.state.searchQuery);

      this.setState({ error: true, errorMessage: error.message});
    }
  }

  handleClick = async () => {
    await this.getLocation();
    await this.getWeather();
    await this.getMovies();
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }
  

  render() {
    return (
      <div>
        <SearchBar handleClick={this.handleClick} handleChange={this.handleChange}/>

        {this.state.location.place_id && <City location={this.state.location}/>}

        {this.state.location.place_id && <Weather weather={this.state.weather}/>}

        {this.state.location.place_id && <Movies movies = {this.state.movies}/>}

        {this.state.error && <h2>{this.state.errorMessage}</h2>}
      </div>
    )
  }
}