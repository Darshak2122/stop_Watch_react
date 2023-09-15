import React, { useEffect, useState } from "react";
import './stopwatch.css'

const StopWatch = () => {
  const [count, setCount] = useState(30);
  const [startTime, setStartTime] = useState(false);

  useEffect(() => {
    if (startTime === true && count > 0) {
      var interval = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
    } 
    else {
      clearInterval(interval);
      setCount(count);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startTime]);

  

  useEffect(() => {
    setStartTime(false);
  }, [count > 0]);

  

  return (
    <div>
      <h2>count : {count}</h2>
      <button className="btn btn-primary" onClick={() => setStartTime(true)}>
        Start
      </button>
      <button className="btn btn-success" onClick={() => setStartTime(false)}>
        Stop
      </button>
      <button className="btn btn-success" onClick={() => setCount(30)}>
        Reset
      </button>
     
    </div>
  );
};

export default StopWatch;