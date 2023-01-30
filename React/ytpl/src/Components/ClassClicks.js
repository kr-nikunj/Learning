import React, { Component } from 'react'

export default class ClassClicks extends Component {

    clickHandler(){
        console.log('clicked via class clicks');
    }

render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}
