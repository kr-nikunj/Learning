import React from 'react';

// function Greet(){
//     return <h1>Hello Nikunj</h1>;
// }

const Greet = (props) => {
console.log(props);
console.log("113");
return (
    <div>
    <h1>Hello {props.name} aka {props.heroname}</h1>
    {props.children}
    </div>

)

}
export default Greet;