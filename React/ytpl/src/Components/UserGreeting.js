import React, { Component } from 'react'

export class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:false
    }
  }

  render() {

   return this.state.isLoggedIn && <div>Welcome Nikunj</div>

    // return(
    //   this.state.isLoggedIn?
    //   <div>Welcome Nikunj</div> :
    //   <div>Welcome Guest</div>
    // )



    // let message
    // if(this.state.isLoggedIn) {
    //   message = <div>'Welcome Nikunj'</div>
    // }else{
    //   message = <div>'Welcome Guest'</div>
    // }

    // return (
    //   <div>
    //     {message}
    //   </div>
    // )




      // if(this.state.isLoggedIn){
      //   return (
      //     <div>
      //       Welcome Nikunj
      //     </div>
      //   )
      // }else{
      //   return (
      //     <div>
      //       Welcome Guest
      //     </div>
      //   )
      // }

    // return (
    //   <div>
    //     <div>
    //       Welcome Nikunj
    //     </div>
    //     <div>
    //       Welcome Guest
    //     </div>
        
    //   </div>
    // )
  }
}

export default UserGreeting