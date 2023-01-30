import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: 'Hello world'
    }

    // this.clickHandler = this.handleClick.bind(this)
}

    // clickHandler(){
    //     this.setState({
    //         message: 'Good  byy!'
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({
            message: 'Good  byy!'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>     */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
      
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}
 
export default EventBind