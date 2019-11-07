import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Room from './Room'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1 className="title">Choose Your Own Adventure</h1>
        <Router>
          <Route exact path="/" component={Room}></Route>
          {/* <Route path='/:direction' component={Room}></Route> */}
        </Router>
      </div>
    )
  }
}

// router and route in this component (route links to room), and passes in the /room/:id

export default App
