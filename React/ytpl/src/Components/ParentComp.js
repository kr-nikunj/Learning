import React, { Component } from 'react'
import MemoComp from './memoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Nikunj'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Nikunj'
            })
        },2000)
    }

  render() {
    console.log('parent component rendered')
    return (
      <div>ParentComp

        <MemoComp/>

        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}

      </div>
    )
  }
}

export default ParentComp