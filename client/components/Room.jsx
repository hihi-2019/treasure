import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Door from './Door'
import Controls from './Controls'
import Message from './Message'
import { thisExpression } from '@babel/types'

class Room extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      roomData: {
        up: 'visible',
        down: 'visible',
        left: 'visible',
        right: 'visible'
      },
      controlVisibility: 'isVisible',
      scroll: true
    }

  }

  randomiseDoor = () => {
    //randomise here
    let num = Math.floor(Math.random() * 2)



    // if num = 0 return 'hidden'
    if (num == 0) return 'hidden'
    // if num = 1 return 'visible'
    else if (num == 1) return 'visible'
  }

  randomiseScroll = () => {
    let scrollNum = Math.floor(Math.random() * 2)

    if (scrollNum == 0) return true
    else return false

  }

  doorSetting = selectedDoor => {
    if (selectedDoor == 'up') {
      this.setState({
        roomData: {
          up: this.randomiseDoor(),
          down: 'visible',
          left: this.randomiseDoor(),
          right: this.randomiseDoor()
        },
        scroll: this.randomiseScroll()
      })
      

    } else if (selectedDoor == 'down') {
      this.setState({
        roomData: {
          up: 'visible',
          down: this.randomiseDoor(),
          left: this.randomiseDoor(),
          right: this.randomiseDoor()
        },
        scroll: this.randomiseScroll()
      })
    } else if (selectedDoor == 'left') {
      this.setState({
        roomData: {
          up: this.randomiseDoor(),
          down: this.randomiseDoor(),
          left: this.randomiseDoor(),
          right: 'visible'
        },
        scroll: this.randomiseScroll()
      })
    } else if (selectedDoor == 'right') {
      this.setState({
        roomData: {
          up: this.randomiseDoor(),
          down: this.randomiseDoor(),
          left: 'visible',
          right: this.randomiseDoor()
        },
        scroll: this.randomiseScroll()
      })
    }
  }

  generateDoors = selectedDoor => {

    this.setState({
      controlVisibility: 'notVisible'
    })

    setTimeout(() => {
      this.doorSetting(selectedDoor)

      this.setState({
        controlVisibility: 'isVisible'
      })
    }, 100)

    


  }

  render() {
    return (
      <div id='gameBox'>
        <div id='room'>
          <Door door='upDoor' canSee={this.state.roomData.up} />
          <Door door='downDoor' canSee={this.state.roomData.down} />
          <Door door='leftDoor' canSee={this.state.roomData.left} />
          <Door door='rightDoor' canSee={this.state.roomData.right} />
          {this.state.scroll && <Message/> }
        </div>
        <Controls
          {...this.props}
          buttonData={this.state.roomData}
          generateDoors={this.generateDoors}
          visibility={this.state.controlVisibility}
          showScroll={this.state.scroll}
        />
      </div>
    )
  }
}

export default Room
