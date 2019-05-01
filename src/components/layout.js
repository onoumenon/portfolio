import React from 'react'

import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import Helmet from 'react-helmet'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <Helmet
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              sizes: '32x32',
              href: '%PUBLIC_URL%/favicon.ico',
            },
          ]}
        />

        <Navigation />
        <Container>{children}</Container>
      </>
    )
  }
}

export default Template
