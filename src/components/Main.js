import { Component } from "react";


import axios from 'axios';
import SearchBar from './SearchBar';
import City from './City';

export default class Main extends Component {

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
      console.log(location);
    } catch (error) {
      console.error('Unable to find city', this.state.searchQuery);

      this.setState({ error: true, errorMessage: error.message});
    }
  }

  handleClick = async () => {
    await this.getLocation();
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value })
  }
  

  render() {
    return (
      <div>
        <SearchBar handleClick={this.handleClick} handleChange={this.handleChange}/>

        {this.state.location.place_id && <City location={this.state.location}/>}

        {this.state.error && <h2>{this.state.errorMessage}</h2>}
      </div>
    )
  }
}