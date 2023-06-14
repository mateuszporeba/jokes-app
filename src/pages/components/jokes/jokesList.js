import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts';
import styles from '../../../styles/jokesList.module.css'

import JokeCard from '../jokes/jokeCard'

export default function JokesList(props) {
  const [showOverflowY, setShowOverflowY] = useState(false);
  const matches = useMediaQuery('(max-width: 635px)');

  useEffect(() => {
    console.log('matches:  '+matches);
    console.log('props.jokes.length >= (matches ? 3 : 5):  '+props.jokes.length >= (matches ? 3 : 5));
    if (props.jokes.length >= (matches ? 3 : 5)) {
      setShowOverflowY(true);
    } else {
      setShowOverflowY(false);
    }
}, [props.jokes.length])


  return (
    <div className={`${styles.jokes} ${showOverflowY ? styles.overflowY : ''}`}>
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
