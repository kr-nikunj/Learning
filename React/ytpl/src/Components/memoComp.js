import React from 'react'

function memoComp({name}) {
    console.log('rendering memo component')
  return (
    <div>{name}</div>
  )
}

export default React.memo(memoComp);