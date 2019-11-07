import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Door from './Door'

class Room extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Room</h1>
        <Door />
        <Door />
        <Door />
        <Door />
      </div>
    )
  }
}

export default Room
