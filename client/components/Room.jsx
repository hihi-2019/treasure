import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Door from './Door'

class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      up: "visible",
      down: "hidden",
      left: "visible",
      right: "hidden"
    }
  }

  render() {
    return (
      <div id='room'>
        <Door door='upDoor' canSee={this.state.up } />
        <Door door='downDoor' canSee={this.state.down } />
        <Door door='leftDoor' canSee={this.state.left } />
        <Door door='rightDoor' canSee={this.state.right } />
      </div>
    )
  }
}

export default Room
