import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [minuts, setMinuts] = useState(0);

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  let timer;

  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setSeconds(seconds + 1);
  //     if (seconds === 59) {
  //       setMinuts(minuts + 1);
  //       setSeconds(0);
  //     }
  //   }, 100);
  //   return () => clearInterval(timer);
  // });

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

  const start = () => {};

  const reStart = () => {
    setMinuts(0);
    setSeconds(0);
  };

  const stop = () => {
    clearInterval(timer);
  };

  const resume = () => {
    setInterval(timer);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stop Watch</h1>

        <p>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </p>
        {/* <p>
          {minuts < 10 ? `0${minuts}` : minuts}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </p> */}
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
