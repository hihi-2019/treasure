import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props)

    if (this.props.canSee == 'visible') {
      return (
        <Link to={this.props.link}>
          <button className="buttonStyle">{this.props.symbol}</button>
        </Link>   
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
