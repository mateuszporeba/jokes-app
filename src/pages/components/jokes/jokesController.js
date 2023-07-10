import React, { useState } from 'react'
import styles from '../../../styles/jokesController.module.css'

export default function JokesController(props) {

  const [sound, setSound] = useState(true);

  const soundHandler = () => {
    setSound(!sound);
    props.sound;
  }
  //----button disabel sound----
/* <button className={styles['hvr-underline-from-right']} onClick={() => soundHandler()}>{sound ? 'dis sound' : 'en sound'}</button> */
  return (
    <div className={styles['controller-container']}>
      <button className={styles['hvr-underline-from-left']} onClick={() => props.getOneJoke()}>+1</button>
      <button className={styles['hvr-underline-from-center']} onClick={() => props.get10Jokes()}>+10</button>
      <button className={styles['hvr-underline-from-center']} onClick={() => props.clearContent()}>clear</button>
    </div>
  )
}
