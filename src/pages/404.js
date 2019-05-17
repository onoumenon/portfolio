import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

class Dev404Page extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    custom404: PropTypes.element,
    location: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = { showCustom404: false }
    this.showCustom404 = this.showCustom404.bind(this)
  }

  showCustom404() {
    this.setState({ showCustom404: true })
  }

  render() {
    const { pathname } = this.props.location
    const { data } = this.props
    const pagePaths = data.allSitePage.nodes.map(node => node.path)
    let newFilePath
    if (pathname === `/`) {
      newFilePath = `src/pages/index.js`
    } else if (pathname.slice(-1) === `/`) {
      newFilePath = `src/pages${pathname.slice(0, -1)}.js`
    } else {
      newFilePath = `src/pages${pathname}.js`
    }

    return this.state.showCustom404 ? (
      this.props.custom404
    ) : (
      <div className="mt-5">
        <h3>Sorry,</h3>
        <img src="/images/404.png" />
        <h3>page not found.</h3>
      </div>
    )
  }
}

export default Dev404Page

export const otherPagesQuery = graphql`
  query OtherPagesQuery {
    allSitePage(filter: { path: { ne: "/dev-404-page/" } }) {
      nodes {
        path
      }
    }
  }
`
