import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (

      <div className="scroll"></div>





      // <div id='gameBox'>
      //   <div id='room'>
      //     <Door door='upDoor' canSee={this.state.roomData.up} />
      //     <Door door='downDoor' canSee={this.state.roomData.down} />
      //     <Door door='leftDoor' canSee={this.state.roomData.left} />
      //     <Door door='rightDoor' canSee={this.state.roomData.right} />
      //     <Message />
      //   </div>
      //   <Controls
      //     {...this.props}
      //     buttonData={this.state.roomData}
      //     generateDoors={this.generateDoors}
      //     visibility={this.state.controlVisibility}
      //   />
      // </div>
    )
  }
}

export default Message
