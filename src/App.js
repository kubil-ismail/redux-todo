import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'

import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import profile from './assets/img/profile.jpg'

// Pages
import Home from './pages/Home'
import Add from './pages/Add'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="d-flex align-items-center mt-5">
            <Container>
              <Row noGutters>
                <Col lg={4}>
                  <Card className="p-4">
                    <h5>Kuma Todo List</h5>
                    <ListGroup variant="flush">
                      <ListGroup.Item className="d-flex justify-content-between">
                        <div>
                          <img src={profile} className="float-left rounded-circle" width={30}/>
                          <div className="ml-5">
                            <h5>Kobayashi San</h5>
                          </div>
                        </div>
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-flex justify-content-between">
                        <Link to="/">
                          <i className="fa fa-sun-o float-left" aria-hidden="true"></i>
                          <div className="ml-5">
                            <h5>My Day</h5>
                          </div>
                        </Link>
                        <p>5</p>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
                <Col lg={8}>
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/add' component={Add} />
                  </Switch>
                </Col>
              </Row>
            </Container>
          </div>
        </Router>
      </Provider>
    )
  }
}
