import React, { Component } from 'react';
import Main from './components/Main';
import axios from 'axios';
import SearchBar from './components/SearchBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      error: false,
      errorMessage: '',
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
      
    } catch (error) {
      console.error('Unable to find city', this.state.searchQuery);

      this.setState({ error: true, errorMessage: error.message});
    }
  }

  handleSubmit = async () => {
    await this.getLocation();
  }
  

  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        <p>{this.state.searchQuery}</p>
        <Main />
      </div>
    )
  }
}