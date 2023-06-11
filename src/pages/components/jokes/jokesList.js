import React, {useState, useEffect} from 'react'
import styles from '../../../styles/jokesList.module.css'

import JokeCard from '../jokes/jokeCard'

export default function JokesList(props) {
const [showOverflowY, setShowOverflowY] = useState(false);

useEffect(() => {
  if(props.jokes.length >= 5){
    
    setShowOverflowY(true);
    console.log('overflow true:    '+ showOverflowY);
  }else{
    setShowOverflowY(false);
    console.log('overflow false:    '+ showOverflowY);
  }

  return () => {
    
  }
}, [props.jokes.length > 5])



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
