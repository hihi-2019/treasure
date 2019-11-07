import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Button from './Button'

class Controls extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      buttonData: {
        up: 'visible',
        down: 'hidden',
        left: 'visible',
        right: 'hidden'
      }
    }
  }

  render() {
    // console.log(this.props.buttonData)
    return (
      <div className='controlBox'>
        <div className='classBox' >
          <Button
            link='/up'
            canSee={this.state.buttonData.up}
            symbol='↑'
          />
          <Button
            link='/down'
            canSee={this.state.buttonData.down}
            symbol='↓'
          />
          <Button
            link='/left'
            canSee={this.state.buttonData.left}
            symbol='←'
          />
          <Button
            link='/right'
            canSee={this.state.buttonData.right}
            symbol='→'
          />
        </div>
      </div>
    )

    // return (
    // <div className='controlBox'>
    //   <h1>Controls</h1>
    //   <Link to='/directions/up'>
    //     <button>↑</button>
    //   </Link>

    //   <Link to='/directions/down'>
    //     <button>↓</button>
    //   </Link>

    //   <Link to='/directions/left'>
    //     <button>←</button>
    //   </Link>

    //   <Link to='/directions/right'>
    //     <button>→</button>
    //   </Link>
    // </div>
    // )
  }

  // link that returns path based on count : /board/{this.state.count}

  //count happens in this component
}

export default Controls
