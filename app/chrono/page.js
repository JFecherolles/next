'use client'

import Header from '../../components/Header'
import React, { useRef } from 'react';
import styles from './chrono.module.css';
// useRef. Cela permettra d'accéder aux éléments DOM correspondants
// à l'intérieur de la fonction timer.

function Chrono() {
  const secondsRef = useRef(null);
  const millisecondsRef = useRef(null);
  const startRef = useRef(null);
  const stopRef = useRef(null);
  const resetRef = useRef(null);

  let sec = 0;
  let millisec = 0;
  let timeInterval;

  function timer() {
    millisec++;
    if (millisec < 9) {
      millisecondsRef.current.innerHTML = '0' + millisec;
    }
    if (millisec > 9) {
      millisecondsRef.current.innerHTML = millisec;
    }
    if (millisec > 99) {
      sec++;
      secondsRef.current.innerHTML = '0' + sec;
      millisec = 0;
      millisecondsRef.current.innerHTML = '0' + 0;
    }
    if (sec > 9) {
      secondsRef.current.innerHTML = sec;
    }
  }

  const handleStart = () => {
    timeInterval = setInterval(timer, 10);
  };

  const handleStop = () => {
    clearInterval(timeInterval);
  };

  const handleReset = () => {
    clearInterval(timeInterval);
    sec = 0;
    millisec = 0;
    secondsRef.current.innerHTML = '00';
    millisecondsRef.current.innerHTML = '00';
  };
  

  return (
    <><Header />
    <div  className={styles.chrono}>
      <h2 className={styles.title}>
      Chrono
      </h2>
      <p className={styles.counter}>
        <span ref={secondsRef} id="seconds">
          00
        </span>
        :
        <span ref={millisecondsRef} id="milliseconds">
          00
        </span>
      </p>
      <button ref={startRef} className={styles.button} id="start" onClick={handleStart}>
        Start
      </button>
      <button ref={stopRef} className={styles.button} id="stop" onClick={handleStop}>
        Stop
      </button>
      <button ref={resetRef} className={styles.button} id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
    </>
  );
}

export default Chrono;
