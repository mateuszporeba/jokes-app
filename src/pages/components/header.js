import React from 'react'
import styles from '../../styles/header.module.css'

import Image from 'next/image'
import Pelikan from '@/images/pelikan.png'

export default function Header() {

  return (
    <div className={styles.headerContainer}>

      <div className={styles['h1-container']}>
        <h1 className={styles.h1}>Joke Machine 2k23</h1>
      </div>
      <Image
        className={styles.image}
        src={Pelikan}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}
