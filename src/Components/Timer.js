import React, { useState ,useRef, useEffect } from 'react'

const Time = () => {
    const [time, setTime] = useState(Date.now())
    const timer = useRef(null)
    useEffect(() => {
      timer.current = setInterval(() => setTime(Date.now()), 1000)
      return () => clearInterval(timer.current)
    }, [])
    return <h1>{`Time: ${time}`}</h1>
}
function Timer() {
    return (
        <div>
            <Time/>
        </div>
    )
}

export default Timer
