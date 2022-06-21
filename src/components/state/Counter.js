import { useState } from "react"

function Counter() {

    // state hook
    const [count, setCount] = useState(42)

    const handleSubtract = () => {
        setCount(count - 1)
    }

    const handleAdd = () => {
        setCount(count + 1)
    }

    return ( 
        <div className="counter">
            <button onClick={handleSubtract}>-</button>
            <span>{count}</span>
            <button onClick={handleAdd}>+</button>
        </div>
    )
}

export default Counter 