import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minuts, setMinuts] = useState(0);

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stop Watch</h1>

        <p>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </p>
        <div
          className="btn-group d-flex justify-content-around"
          role="group"
          aria-label="Basic example"
        >
          {!timerOn && time === 0 && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => setTimerOn(true)}
            >
              Start
            </button>
          )}
          {timerOn && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => setTimerOn(false)}
            >
              Stop
            </button>
          )}
          {!timerOn && time > 0 && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => setTime(0)}
            >
              Reset
            </button>
          )}
          {!timerOn && time > 0 && (
            <button
              className="btn btn-outline-secondary"
              onClick={() => setTimerOn(true)}
            >
              Resume
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
