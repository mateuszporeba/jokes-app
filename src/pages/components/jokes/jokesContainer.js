import React, { useState } from 'react'
import styles from '../../../styles/jokesContainer.module.css'

import JokesController from '../jokes/jokesController'
import JokeCard from './jokeCard'
import JokesList from './jokesList'

import uuid from 'react-uuid';

export default function JokesContainer() {

  const [jokes, setJokes] = useState([{}]);

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
  }

  const get10Jokes = async () => {
    const result = await fetch('https://official-joke-api.appspot.com/random_ten');
    const data = await result.json();

    if (JSON.stringify(jokes) === '[{}]') {
      setJokes([{ id: data[0].id, type: data[0].type, setup: data[0].setup, punchline: data[0].punchline, key: uuid() }]);
      data.slice(1).map(j => (
        setJokes(
          prevJokes => {
            const updatedJokes = [...prevJokes];
            updatedJokes.unshift({ id: j.id, type: j.type, setup: j.setup, punchline: j.punchline, key: uuid() })
            return updatedJokes;
          })
      ));
    }
    else {
      data.map(j => (
        setJokes(
          prevJokes => {
            const updatedJokes = [...prevJokes];
            updatedJokes.unshift({ id: j.id, type: j.type, setup: j.setup, punchline: j.punchline, key: uuid() })
            return updatedJokes;
          })
      ));
    }
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
      <JokesController getOneJoke={getJoke} get10Jokes={get10Jokes} clearContent={onClearContentHandler} />
      <div className={styles['jokes-container']}>
        {content}


      </div>
    </div>
  )
}
