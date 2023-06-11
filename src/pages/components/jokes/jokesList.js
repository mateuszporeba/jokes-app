import React from 'react'
import styles from '../../../styles/jokesList.module.css'

import JokeCard from '../jokes/jokeCard'



export default function JokesList(props) {
  return (
    <div className={styles.jokes}>
      {props.jokes.map(j => (
        <JokeCard
          key={j.key}
          id={j.id}
          type={j.type}
          setup={j.setup}
          punchline={j.punchline}
        />
      ))}
    </div>
  )
}
