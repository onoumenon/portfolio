import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className={styles.heroDetails}>
      <h4 className={styles.heroHeadline}>{data.name}</h4>
      <p className={styles.heroTitle}>{data.title}</p>
      <p>{data.shortBio.shortBio}</p>
    </div>
  </div>
)
