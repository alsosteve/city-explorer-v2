import { Component } from "react";
import Card from "react-bootstrap/Card";

export default class City extends Component {
  render() {
    return(
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.props.location.lat},${this.props.location.lon}&zoom=18`} />
        <Card.Body>
          <Card.Title>{this.props.location.display_name}</Card.Title>
          <Card.Text>
            Latitude: {this.props.location.lat}
          </Card.Text>
          <Card.Text>
            Longitude: {this.props.location.lon}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}