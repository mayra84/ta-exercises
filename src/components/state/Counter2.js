import React, { useState } from 'react'

function Counter2() {
    const [count, setCount] = useState(0)

    const handleAddOne = () => {
        setCount(count + 1)
    }

    const handleAddTen = () => {
        setCount(count + 10)
    }

    const handleSubtractOne = () => {
        setCount(count - 1)
    }

    const handleSubtractTen = () => {
        setCount(count + 10)
    }

  return (
    <div>
        <span>{count}</span>
        <br></br>
        <button onClick={handleAddOne}>+1</button>
        <button onClick={handleAddTen}>+10</button>
        <button onClick={handleSubtractOne}>-1</button>
        <button onClick={handleSubtractTen}>-10</button>
    </div>
  )
}

export default Counter2