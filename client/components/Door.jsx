import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Door extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      
    if (this.props.canSee == 'visible') {
      return(
        <div className={this.props.door} style={{visibility: 'visible'}}></div>
      )
    }
    else {
      return(
        <div className={this.props.door} style={{visibility: 'hidden'}}></div>
      )
    }
  }
}

export default Door
