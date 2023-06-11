import React, { useState } from 'react'
import styles from '../../../styles/jokesContainer.module.css'

import JokesController from '../jokes/jokesController'
import JokeCard from './jokeCard'
import JokesList from './jokesList'

import uuid from 'react-uuid';

export default function JokesContainer() {

  const [jokes, setJokes] = useState([{}]);
  // const [jokes, setJokes] = useState([
  //   {
  //     setup: "What did the ocean say to the shore?",
  //     id: '32',
  //     data: 'general',
  //     punchline: "Nothing, it just waved."
  //   }
  // ]);

  const getJoke = async () => {
    const result = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await result.json();

    if (JSON.stringify(jokes) === '[{}]') {
      setJokes([{ id: data.id, type: data.type, setup: data.setup, punchline: data.punchline, key: uuid() }]);
    }
    else {
      setJokes(
        prevJokes => {
          const updatedJokes = [...prevJokes];
          updatedJokes.unshift({ id: data.id, type: data.type, setup: data.setup, punchline: data.punchline, key: uuid() })
          return updatedJokes;
        });
    }
    console.log(jokes);
  }

  let content = ('');
  if (jokes.length > 0 && JSON.stringify(jokes) != '[{}]') {
    content = (
      <JokesList jokes={jokes} />
    );
  }

  const onClearContentHandler = () => {
    setJokes([{}]);
console.log('clear');
  }

  return (
    <div>
      <JokesController getOneJoke={getJoke} clearContent={onClearContentHandler}/>
      <div className={styles['jokes-container']}>
        {content}


      </div>
    </div>
  )
}
