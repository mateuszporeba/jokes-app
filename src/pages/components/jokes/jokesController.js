import React from 'react'
import styles from '../../../styles/jokesController.module.css'

export default function JokesController(props) {

const tenJokesHandler = () =>{
  console.log('10 reobi');
}



  return (
    <div className={styles['controller-container']}>
      <button className={styles['hvr-underline-from-left']} onClick={() => props.getOneJoke()}>+1</button>
      <button className={styles['hvr-underline-from-center']} onClick={() => props.get10Jokes()}>+10</button>
      <button className={styles['hvr-underline-from-right']} onClick={() => props.clearContent()}>clear</button>
    </div>
  )
}
