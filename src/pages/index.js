import React from 'react'
import { graphql } from 'gatsby'
import { CardDeck } from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGlobeAsia,
  faChevronDown,
  faHandPointRight,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import About from './../components/about'
import ArticlePreview from '../components/article-preview'
import Zoom from 'react-reveal/Zoom'

library.add(faGithub, faGlobeAsia, faChevronDown, faHandPointRight)

class RootIndex extends React.Component {
  renderHoveredArticleImage = () => {
    if (!this.state.selectedArticle) {
      return
    }
    return <img src="images/404.png" />
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="wrapper">
            <About />
            <h3 id="projects" className="section-headline">
              PROJECTS
            </h3>
            <ul className="article-list">
              <CardDeck className="container">
                <Zoom>
                  {posts.map(({ node }) => {
                    return (
                      <li key={node.slug}>
                        <ArticlePreview article={node} />
                      </li>
                    )
                  })}
                </Zoom>
              </CardDeck>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          url
          github
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
