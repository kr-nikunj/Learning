import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Nikunj'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps called');
        return null;
    }
    
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true;
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) { 
        console.log('LifecycleA Get snapshot before update')
        return null;
    }
    
    changeState = () =>{
        this.setState({
            name:'Nikunj'
        })
    } 
    
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

  render() {
    console.log('LifecycleA render')
    return (
      <div>
        LifecycleA render
        <button onClick={this.changeState}>Change State</button>
        {/* <LifecycleB/> */}
      </div>
    )
  }
}

export default LifecycleA