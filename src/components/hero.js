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
    <div className={styles.bio}>
      <h3>ABOUT</h3>
      <h4>
        I love creating things that bring people joy. Having taken on the role
        of art director, illustrator, and game artist for the past 8 years, it's
        time for a new adventure!
      </h4>
      <br />
      <h4>
        I recently graduated from the JumpStart programming bootcamp and am
        finding my first job as a software developer.
      </h4>
      <br />
      <h4>
        🏓 <a href="mailto:tanhuitian@gmail.com">Ping me</a> if you have any
        opportunities.
      </h4>
    </div>
    <hr />
  </>
)
