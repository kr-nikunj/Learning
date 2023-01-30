import React from 'react'

function ChildComponent(props) {
  return (
    <div><button onClick={() => props.greetHandler('child heloo')}>Greet parent</button></div>
  )
}

export default ChildComponent