import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class Text extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className='absolute'>
        <h1>{this.props.msg}</h1>
      </div>
    )
  }
}

export default Text
