import { Component } from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";


export default class moviesRender extends Component {
  render() {
    return (
      <Container>
        {this.props.movies.map((moviesData, idx) => {
            return(
            <Card key={idx}>
            <Card.Title></Card.Title>  
              <Card.Body>
                <Card.Text>Title: {moviesData.title}</Card.Text>
                <Card.Text>Overview: {moviesData.overview}</Card.Text>
                <Card.Text>Average Votes: {moviesData.average_votes}</Card.Text>
                <Card.Text>Total Votes: {moviesData.total_votes}</Card.Text>
                <Card.Text>Popularity: {moviesData.popularity}</Card.Text>
                <Card.Text>Released: {moviesData.released}</Card.Text>
              </Card.Body>
            </Card>
            )
        })};
      </Container>
    );
  };
}