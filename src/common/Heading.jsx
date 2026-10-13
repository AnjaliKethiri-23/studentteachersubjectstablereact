import React from 'react'

const Heading = (props) => {
    console.log(props);
  return (
    <div>
      <h1>This is {props.name} data</h1>
    </div>
  )
}

export default Heading
