import React, { Component } from 'react'

export class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Nikunj'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps called B');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { 
        console.log('LifecycleB Get snapshot before update')
        return null;
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

  render() {
    console.log('LifecycleB render')
    return (
      <div>
        LifecycleB render
      </div>
    )
  }
}

export default LifecycleB