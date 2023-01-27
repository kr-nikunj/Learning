import React from "react";

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello Nikunj</h1>
    //     </div>
    // )
    return React.createElement('div',{id: 'Hello', className:'Dummyclass'}, React.createElement('h1',null,"Hello  Nik"));

    // jsx
    // Class -> className
    // for -> htmlFor
    // onclick -> onclick
    // tabindex -> tabIndex
} 
export default Hello;