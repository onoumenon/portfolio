import React from 'react'
import styles from './hero.module.css'
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'
import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ data }) => (
  <>
    <div className={styles.hero}>
      <div className={styles.heroDetails}>
        <a href="/#about">
          <FontAwesomeIcon className="icon" icon="chevron-down" size="2x" />
        </a>
      </div>
    </div>

    <div className={styles.bio} id="about">
      <Bounce left>
        <h3 className={styles.heroTitle}>👋 Hi, I am </h3>
      </Bounce>
      <Bounce left>
        <h1 className={styles.heroHeadline}>Hui Tian,</h1>
      </Bounce>
      <Bounce left>
        <h3 className={styles.heroTitle}>
          a{' '}
          <span className="text-warning" id="PopoverFocus">
            full stack
          </span>{' '}
          web developer.
          <UncontrolledPopover
            trigger="focus hover"
            placement="bottom"
            target="PopoverFocus"
          >
            <PopoverHeader>MERN stack</PopoverHeader>
            <PopoverBody>
              Frontend: React | Backend: Node, Express | DB: MongoDB, PostgreSQL
            </PopoverBody>
          </UncontrolledPopover>
        </h3>
      </Bounce>
      <br />
      <Bounce left>
        <h3>
          more{' '}
          <FontAwesomeIcon
            className="icon text-primary"
            icon="hand-point-right"
          />
        </h3>
      </Bounce>
      <Zoom>
        <p>
          I love creating things that bring people joy. Having taken on the role
          of art director, illustrator, and game artist for the past 8 years,
          it's time for a new adventure!
        </p>
      </Zoom>
      <br />
      <Zoom>
        <p>
          I recently graduated from the JumpStart programming bootcamp and am
          finding my first job as a software developer.
        </p>
      </Zoom>
      <br />
      <Zoom>
        <p>
          🏓 <a href="mailto:tanhuitian@gmail.com">Ping me</a> if you have any
          opportunities.
        </p>
      </Zoom>
    </div>
    <hr />
  </>
)
