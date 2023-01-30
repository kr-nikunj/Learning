import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log('RegularComp render')
    return (
      <div>Regular Comp {this.props.name}</div>
    )
  }
}

export default RegularComp