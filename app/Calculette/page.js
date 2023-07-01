'use client'

import Header from '../../components/Header'
import React, { useState } from 'react';
import styles from './Calculette.module.css';

function Calculette() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const calculate = () => {   
    setResult(eval(result).toString());
  }

  return (
    <>
      <Header />
      <div className={styles.calculette}>
        <h1>Calculette</h1>
        <input type="text" placeholder='0' id='reponse' value={result} className={styles.input} />
        <input type="button" value="C" id="clear" onClick={clear} className={`${styles.button} ${styles.clearButton}`} />
        <input type="button" value="-" id="subtract" onClick={handleClick} name='-' className={styles.button} />
        <input type="button" value="/" id="divide" onClick={handleClick} name='/' className={styles.button} />
        <input type="button" value="%" id="percentage" onClick={handleClick} name='/' className={styles.button} />
        <input type="button" value="7" id="seven" onClick={handleClick} name='7' className={styles.button} />
        <input type="button" value="8" id="eight" onClick={handleClick} name='8' className={styles.button} />
        <input type="button" value="9" id="nine" onClick={handleClick} name='9' className={styles.button} />
        <input type="button" value="*" id="multiply" onClick={handleClick} name='*' className={styles.button} />
        <input type="button" value="4" id="four" onClick={handleClick} name='4' className={styles.button} />
        <input type="button" value="5" id="five" onClick={handleClick} name='5' className={styles.button} />
        <input type="button" value="6" id="six" onClick={handleClick} name='6' className={styles.button} />
        <input type="button" value="+" id="add" onClick={handleClick} name='+' className={styles.button} />
        <input type="button" value="0" id="zero" onClick={handleClick} name='0' className={styles.button} />
        <input type="button" value="1" id="one" onClick={handleClick} name='1' className={styles.button} />
        <input type="button" value="2" id="two" onClick={handleClick} name='2' className={styles.button} />
        <input type="button" value="3" id="three" onClick={handleClick} name='3' className={styles.button} />
        <input type="button" value="=" id="equal" onClick={calculate} className={`${styles.button} ${styles.equalButton}`} />
      </div>
    </>
  );
}

export default Calculette;
