import React, { Component } from 'react'
import styles from './hero.module.css'
import { UncontrolledCollapse } from 'reactstrap'
import Bounce from 'react-reveal/Bounce'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Example extends Component {
  state = { isMore: true }

  moreOrLess = () => {
    this.setState({ isMore: !this.state.isMore })
  }

  render() {
    return (
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

            <h1 className={styles.heroHeadline}>Hui Tian,</h1>

            <h3 className={styles.heroTitle}>
              an aspiring
              <br /> <span className="text-warning">full stack</span>
              <br /> web developer.
            </h3>

            <br />
            <div className="hoverBounce" onClick={this.moreOrLess}>
              <h3 id="aboutMe">
                {this.state.isMore ? 'more' : 'less'}{' '}
                <FontAwesomeIcon
                  className="icon text-primary"
                  icon="hand-point-right"
                />
              </h3>
            </div>
          </Bounce>
          <UncontrolledCollapse toggler="#aboutMe">
            <Bounce left>
              <p>
                Prior to that, I was an art director/ senior illustrator, with 8
                years of experience in the art industry. I decided to make the
                career switch to pursue my interest in programming.
              </p>
              <br />
              <p>
                I recently graduated from the JumpStart programming bootcamp.
                Currently, I am finding my first job in web development.
              </p>
              <br />
              <p>
                🏓{' '}
                <a href="mailto:tanhuitian@gmail.com">
                  <i>Ping me</i>
                </a>{' '}
                if my profile interests you.
              </p>
            </Bounce>
          </UncontrolledCollapse>
        </div>
        <hr />
      </>
    )
  }
}
