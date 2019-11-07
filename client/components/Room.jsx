import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Door from './Door'

// import js data file here

class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomData: {
        up: 'visible',
        down: 'hidden',
        left: 'visible',
        right: 'hidden'
      }
    }
  }

  // this does map and sends data vbased on room number (recieved from route that is in app.jsx)
  // function that updates roomData according to count (received in the link)

  render() {
    return (
      <div id='room'>
        <Door door='upDoor' canSee={this.state.roomData.up} />
        <Door door='downDoor' canSee={this.state.roomData.down} />
        <Door door='leftDoor' canSee={this.state.roomData.left} />
        <Door door='rightDoor' canSee={this.state.roomData.right} />
      </div>
    )
  }
}

export default Room
