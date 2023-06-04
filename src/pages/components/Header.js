import React from 'react'
import styles from '../../styles/Header.module.css'

export default function Header() {
  //   <div className={styles.div}>
  //   <h1 className={styles.h1}>Joke Machine 2k23</h1>
  // </div>
  return (
    <div className={styles.headerContainer}>
      <div className={styles['h1-container']}>
        <h1 className={styles.h1}>Joke Machine 2k23</h1>
      </div>
    </div>
  )
}
