import React from 'react'
import styles from '../../styles/Body.module.css'

import JokesController from './jokes/jokesController.js'
import JokesContainer from './jokes/jokesContainer.js'

export default function Body() {
  return (
    <div className={styles['body-container']}>
      <JokesController />
      <JokesContainer />
    </div>
  )
}
