import React, { useState } from 'react'

const Greeting = () => {
    const [name, setName] = useState("")
  return (
    <div>
        
            <h1>Enter Your name</h1>
            <input type="text" onChange={(e) => {
                setName(e.target.value)
            }} />
            <p>{name.length ? `Hello ${name}!` : ""} </p>
        
    </div>
  )
}

export default Greeting