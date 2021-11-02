import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class SearchBar extends Component {
  render() {
    return(
      <Form onSubmit={event => this.props.handleSubmit(event)}>
        <Row className='justify-content-md-center'>
          <Col sm={3} className='my-1'>
            <Form.Label htmlFor='inlineFormInputName' visuallyHidden>
              Please Enter City Name
            </Form.Label>
            <Form.Control
              onChange={event =>
                this.setState({ searchQuery: event.target.value })
              }
              placeholder='Ex: Seattle'
            />
          </Col>
          <Col xs='auto' className='my-1'>
            <Button
              type='submit'
              as='input'
              value='Explore!'
              variant='primary'
            />{' '}
          </Col>
        </Row>
      </Form>
    )
  }
}