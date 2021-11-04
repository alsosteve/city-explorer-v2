import { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default class Weather extends Component {
  render() {
    return(
      <Container>
        {this.props.weather.map((weatherData, idx) => {
            return(
            <Card key={idx}>
            <Card.Title></Card.Title>  
              <Card.Body>
                <Card.Text>Date: {weatherData.datetime}</Card.Text>
                <Card.Text>Report: {weatherData.description}</Card.Text>
              </Card.Body>
            </Card>
            )
        })}
      </Container>
    )
  }
}