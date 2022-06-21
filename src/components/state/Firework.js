import React, { useState } from 'react'

export default function Firework() {

    const [firework, setFirework] = useState(false)

    const handleFirework = () => {
        setFirework(!firework)
    }

  return (
    <div onClick={handleFirework}>
        { firework ? ("💥"
            ) : (
                "🧨")}
    </div>
  )
}
