import React, { Component } from 'react'
import Child from './Child';



class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Hello, world",
        };
        this.togglechange = this.togglechange.bind(this);
      }

    togglechange(child_data){
      console.log(child_data);
      this.setState({name :child_data});
    }

    
    render() {
      // const {name_change} = this.state;
    return (
        <div>
            {this.state.name}
            <Child changename={this.togglechange}/>
        </div>
    )
  }
}

export default Parent