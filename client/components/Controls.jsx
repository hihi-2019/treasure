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
      <div className='controlBox' className={this.props.visibility}>
        <p className='center'>Pick a Direction</p>
        <div className='classBox'>
          <Button
            {...this.props}
            link='/up'
            canSee={this.props.buttonData.up}
            symbol='↑'
            func={this.props.generateDoors}
            direc='up'
          />
          <Button
            {...this.props}
            link='/down'
            canSee={this.props.buttonData.down}
            symbol='↓'
            func={this.props.generateDoors}
            direc='down'
          />
          <Button
            {...this.props}
            link='/left'
            canSee={this.props.buttonData.left}
            symbol='←'
            func={this.props.generateDoors}
            direc='left'
          />
          <Button
            {...this.props}
            link='/right'
            canSee={this.props.buttonData.right}
            symbol='→'
            func={this.props.generateDoors}
            direc='right'
          />
          {this.props.showScroll && 
            <Button
              symbol='?'
              canSee='visible'
            />
          }
        </div>
      </div>
    )
  }
}

export default Controls
