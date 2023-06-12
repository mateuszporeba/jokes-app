import React from 'react'
import styles from '../../styles/body.module.css'


import JokesContainer from './jokes/jokesContainer.js'

export default function Body() {
  return (
    <div className={styles['body-container']}>

      <JokesContainer />
    </div>
  )
}
