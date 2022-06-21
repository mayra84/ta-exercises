import React, { useState } from 'react'
import './StatusPicker.css'

function StatusPicker() {

    const [status, setStatus] = useState('Active')

    // FIRST SOLUTION

    // const handleActive = () => {
    //     setStatus('Active')
    // }

    // const handleAway = () => {
    //     setStatus('Away')
    // }

    // const handleOffline = () => {
    //     setStatus('Offline')
    // }


    // SECOND SOLUTION

    // const statusOptions = ['Active', 'Away', 'Offline']

    // const handleChange = (status) => {
    //     setStatus(status)
    // }

    return (
        <div>
            {/* FIRST SOLUTION */}
            {/* <h2>{status}</h2>
            <button onClick={handleActive}>Active</button>
            <button onClick={handleAway}>Away</button>
            <button onClick={handleOffline}>Offline</button> */}



            {/* SECOND SOLUTION */}
            {/* <h2>{status}</h2>
            {statusOptions.map((status, i) => {
                if (statusOptions === status) {
                    return null
                }
                return <button key={i} onClick={() => handleChange(status)}>{status}</button>
            })} */}



            {/* THIRD SOLUTION */}
            <h2 className={`status-${status}`}>{status}</h2>
            <button onClick={() => setStatus('Active')}>Active</button>
            <button onClick={() => setStatus('Away')}>Away</button>
            <button onClick={() => setStatus('Offline')}>Offline</button>

        </div>
    )
}

export default StatusPicker