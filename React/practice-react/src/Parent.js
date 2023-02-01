import React, { Component } from 'react'
import Child from './Child';



class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name_change: "Hello, world",
        };
      }

    togglechange = (child_data) => {
    this.setState({name_change: child_data});
    console.log(child_data);
    }


    render() {
      const {name_change} = this.state;
    return (
        <div>
            {name_change}
            <Child name_change={name_change}/>
        </div>
    )
  }
}

export default Parent