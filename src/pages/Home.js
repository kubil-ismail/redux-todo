import React, { Component } from 'react'
import { Container, Card, Jumbotron, ListGroup, Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { decreaseTodo } from '../redux/actions/todoActions'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Card>
        <Jumbotron fluid className="pb-2 bg-primary text-white">
          <Container>
            <h1>My Day</h1>
            <p>Tuesday, January 29</p>
          </Container>
        </Jumbotron>
        <Card.Body>
          <ListGroup variant="flush">
            {
              this.props.Todo.todoReducers.value === 0 ?
              <Alert variant="warning">List not found</Alert> :
              this.props.Todo.todoReducers.data.map((val,key) => (
                <ListGroup.Item className="d-flex justify-content-between">
                  <div>
                    <i className="fa fa-circle-thin float-left mt-1" aria-hidden="true"></i>
                    <div className="ml-4">
                      <h5>{val.title}</h5>
                      <p className="text-muted">{val.desc}</p>
                    </div>
                  </div>
                  <Button variant="transpaernt text-danger" onClick={() => this.props.decreaseTodo(key)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </Button>
                </ListGroup.Item>
              ))
            }
            <ListGroup.Item>
              <Link to="/add">
                <i className="fa fa-plus float-left mt-1" aria-hidden="true"></i>
                <div className="ml-4">
                  <h5>Go to walk</h5>
                </div>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  Todo: state
})

const mapDispatchToProps = { decreaseTodo }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
