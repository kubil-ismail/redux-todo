import React, { Component } from 'react'
import { Card, Form, Jumbotron, Container, Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import { increaseTodo } from '../redux/actions/todoActions'

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: null,
      desc: null
    }
  }

  render() {
    const { title, desc } = this.state
    return (
      <Card>
        <Jumbotron fluid className="pb-2 bg-primary text-white">
          <Container>
            <h1>My Day</h1>
            <p>Tuesday, January 29</p>
          </Container>
        </Jumbotron>
        <Card.Body>
          <Form>
            <Form.Group controlId="todoName">
              <Form.Label>Todo Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => this.setState({
                  title: e.target.value
                })}
              />
            </Form.Group>
            <Form.Group controlId="todoDesc">
              <Form.Label>Todo Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                onChange={(e) => this.setState({
                  desc: e.target.value
                })}
              />
            </Form.Group>
            <Button
              onClick={() => {
                this.props.increaseTodo(title, desc)
                this.props.history.push('/')
              }}
            > 
            Save
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  Todo: state.Todo
})

const mapDispatchToProps = { increaseTodo }

export default connect(mapStateToProps, mapDispatchToProps)(Add)
