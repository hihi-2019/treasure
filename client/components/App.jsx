import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Room from './Room'
import Controls from './Controls'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Room />
        <Controls />
      </div>
    )
  }
}

 

  // router and route in this component (route links to room), and passes in the /room/:id

export default App
