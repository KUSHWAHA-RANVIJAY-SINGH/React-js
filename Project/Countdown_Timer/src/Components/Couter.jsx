import React, { useRef, useState, useEffect } from "react";
import "../index.css";

function Counter() {
  const [time, setTime] = useState(0); 
  const [isActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const interval = useRef(null);
  const inputRef = useRef(null); 

  const handleInput = (e) => {
    const inputTime = parseInt(e.target.value, 10); 
    if (!isNaN(inputTime)) {
      setTime(inputTime * 60); 
    } else {
      setTime(0);
    }
  };

  const formatTime = () => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  const handleStart = () => {
    if (time > 0) {
      setActive(true);
      setPaused(false);
    }
  };

  const handlePause = () => {
    if (isActive) {
      setPaused(!isPaused);
    }
  };

  const handleStop = () => {
    setActive(false);
    setPaused(false);
    clearInterval(interval.current);
    setTime(0); 
    if (inputRef.current) {
      inputRef.current.value = ""; 
    }
  };

  useEffect(() => {
    if (isActive && !isPaused) {
      interval.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval.current);
            alert("Time is up!");
            setActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval.current); 
  }, [isActive, isPaused]);

  return (
    <div className="container">
      <h1>Counter Timer</h1>
      <div className="timer">
        <input
          type="number"
          placeholder="Enter time in minutes"
          onChange={handleInput}
          ref={inputRef}         />
      </div>
      <div className="display-time">{formatTime()}</div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleStart}
          disabled={isActive && !isPaused}
        >
          Start
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={handlePause}
          disabled={!isActive}
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Counter;
