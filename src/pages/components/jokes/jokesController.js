import React from 'react'
import styles from '../../../styles/jokesController.module.css'

export default function jokesController() {
  return (
    <div className={styles['controller-container']}>
      <button className={styles['hvr-underline-from-left']}>+1</button>
      <button className={styles['hvr-underline-from-center']}>+10</button>
      <button className={styles['hvr-underline-from-right']}>clear</button>
    </div>
  )
}
