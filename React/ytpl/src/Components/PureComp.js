import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log('pure component rendered')
    return (
      <div>PureComp {this.props.name}</div>
    )
  }
}

export default PureComp