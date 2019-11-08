import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    

    if (this.props.canSee == 'visible') {
      return (
        // <Link to={this.props.link}>
        <button
          className='buttonStyle'
          
          onClick={() => {
            this.props.generateDoors(this.props.direc)
          }}
        >
          {this.props.symbol}
        </button>
        // </Link>
      )
    } 
    else {
      return (
        <div></div>
      )

    }
  }
}

export default Button
