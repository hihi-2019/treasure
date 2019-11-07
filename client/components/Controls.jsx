import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Button from './Button'

class Controls extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props.buttonData)
    return (
      <div className='controlBox'>
        <div className='classBox' >
          <Button
            link='/up'
            canSee={this.props.buttonData.up}
            symbol='↑'
          />
          <Button
            link='/down'
            canSee={this.props.buttonData.down}
            symbol='↓'
          />
          <Button
            link='/left'
            canSee={this.props.buttonData.left}
            symbol='←'
          />
          <Button
            link='/right'
            canSee={this.props.buttonData.right}
            symbol='→'
          />
        </div>
      </div>
    )
  }

}

export default Controls