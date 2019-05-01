import React from 'react'
import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroDetails}>
      <p className={styles.heroTitle}>Hi, I am </p>
      <h1 className={styles.heroHeadline}>{data.name},</h1>
      <p className={styles.heroTitle}>a {data.title}.</p>
      {/* <p>{data.shortBio.shortBio}</p> */}
    </div>
  </div>
)
