import React, { useEffect, useState } from 'react'

const Xxx = () => {
    const [count,setCount] = useState(30)
    const [startTime,setStartTime] = useState(false)

    useEffect(()=>{
        if(startTime === true && count > 0){
            var interval = setInterval(()=>{
                setCount((count)=> count - 1)
            },1000)
        } else{
            clearInterval(interval)
            setCount(count)
        }
        return()=>{
            clearInterval(interval)
        }
    },[startTime]);

    useEffect(()=>{
        setStartTime(false)
    },[count > 0]);
  return (
    <div>
    <h1>{count}</h1>  
    <button onClick={()=>setStartTime(true)}>Start</button>
    <button onClick={setStartTime(false)}>Stop</button>
    <button onClick={()=>setCount(30)}>Reset</button>
    </div>
  )
}

export default Xxx
