import React,{ Component } from "react";

class Welcome extends Component {
    render(){
        const {name, heroname} = this.props;
        // const {state1,state2} = this.state;
        return(
            <div>
                <h1>Welcome {name} a.k.a. {heroname}</h1>
            </div>
    )}
}

// props are unmutable

export default Welcome;