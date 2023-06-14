import React, { useState, useEffect } from 'react'
import styles from '../../../styles/jokeCard.module.css'

import Image from 'next/image'
import Spark from '@/images/spark.gif'

export default function Joke(props) {

  const [showPunchline, setShowPunchline] = useState(false);
  const [showSpark, setShowSpark] = useState(true);


  const setup = props.setup;
  const punchline = props.punchline;

  const punchlineHandler = () => {
    setShowPunchline(true);
  }

  useEffect(() => {
    if (showPunchline) {
      setTimeout(() => {
        setShowSpark(false);
      }, 700);
    }
  }, [showPunchline])



  return (
    <div className={styles.card}>
      <h3>{setup}</h3>
      <hr></hr>
      {showPunchline && <>
        {showSpark && <>
          <audio autoPlay src="/medium-explosion.mp3" />
          <Image
            className={styles.confetti}
            src={Spark}
            width={200}
            height={200}
            alt="confetti"
          />
        </>}
        <h2>{punchline}</h2>
      </>
      }
      {!showPunchline && <button className={styles['hvr-underline-from-center']} onClick={punchlineHandler}>Punchline!</button>}
    </div>
  )
}
