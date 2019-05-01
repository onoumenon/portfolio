import React from 'react'
import styles from './hero.module.css'

export default ({ data }) => (
  <>
    <div className={styles.hero}>
      <div className={styles.heroDetails}>
        <h3 className={styles.heroTitle}>👋 Hi, I am </h3>
        <h1 className={styles.heroHeadline}>Hui Tian,</h1>
        <h3 className={styles.heroTitle}>a {data.title}.</h3>
      </div>
    </div>
    <h3 className={styles.bio}>{data.shortBio.shortBio}</h3>
    <hr />
  </>
)
