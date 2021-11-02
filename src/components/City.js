import { Component } from "react";
import Card from "react-bootstrap/Card";

export default class City extends Component {
  render() {
    return(
      <Card style={{ width: '40rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
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