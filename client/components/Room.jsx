import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Door from './Door'
import Controls from './Controls'

class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomData: {
        up: 'hidden',
        down: 'visible',
        left: 'visible',
        right: 'visible'
      }
    }
  }

  render() {
    if(this.props.match.params.direction) {
      console.log(this.props.match.params.direction)
    }

    return (
      <div>
        <div id='room'>
          <Door door='upDoor' canSee={this.state.roomData.up} />
          <Door door='downDoor' canSee={this.state.roomData.down} />
          <Door door='leftDoor' canSee={this.state.roomData.left} />
          <Door door='rightDoor' canSee={this.state.roomData.right} />
        </div>
        <Controls buttonData={this.state.roomData} />
      </div>
    )
  }
}

export default Room
