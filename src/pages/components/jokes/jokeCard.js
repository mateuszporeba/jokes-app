import React, { useState } from 'react'
import styles from '../../../styles/jokeCard.module.css'


export default function Joke(props) {

  const [showPunchline, setShowPunchline] = useState(false);

  const setup = props.setup;
  const punchline = props.punchline;

  const punchlineHandler = () => {
    setShowPunchline(true);
  }
  return (
    <div className={styles.card}>
      <h3>{setup}</h3>
      <hr></hr>
      {showPunchline && <h2>{punchline}</h2>}
      {!showPunchline && <button className={styles['hvr-underline-from-center']} onClick={punchlineHandler}>Punchline!</button>}
    </div>
  )
}
