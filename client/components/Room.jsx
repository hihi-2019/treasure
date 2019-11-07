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

  generateDoors = (selectedDoor) => {
    // return console.log(selectedDoor)
    


    if (selectedDoor == 'up') {
      this.setState({
        roomData: {
          up: 'hidden',
          down: 'visible',
          left: 'hidden',
          right: 'hidden'
        }
      })
      console.log(selectedDoor)
    } else if (selectedDoor == 'down'){
      this.setState({
        roomData: {
          up: 'visible',
          down: 'hidden',
          left: 'hidden',
          right: 'hidden'
        }
      })
      console.log(selectedDoor)
    } else if (selectedDoor == 'left'){
      this.setState({
        roomData: {
          up: 'hidden',
          down: 'hidden',
          left: 'hidden',
          right: 'visible'
        }
      })
      console.log(selectedDoor)
    } else if (selectedDoor == 'right') {
      this.setState({
        roomData: {
          up: 'hidden',
          down: 'hidden',
          left: 'visible',
          right: 'hidden'
        }
      })
      console.log(selectedDoor)
    }



  }




  render() {
    // if(this.props.match.params.direction) {
    //   let selectedDoor = this.props.match.params.direction

    //   this.generateDoors(selectedDoor)

    //   //console.log(this.props.match.params.direction)
    // }

    return (
      <div>
        <div id='room'>
          <Door door='upDoor' canSee={this.state.roomData.up} />
          <Door door='downDoor' canSee={this.state.roomData.down} />
          <Door door='leftDoor' canSee={this.state.roomData.left} />
          <Door door='rightDoor' canSee={this.state.roomData.right} />
        </div>
        <Controls
          {... this.props}
          buttonData={this.state.roomData}
          generateDoors={this.generateDoors}
        />
      </div>
    )
  }
}

export default Room
