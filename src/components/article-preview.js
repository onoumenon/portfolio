import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/blog/${article.slug}`}>
      <Img alt="" fluid={article.heroImage.fluid} />
      <h4 className={styles.previewTitle}>{article.title}</h4>
    </Link>
    <small>{article.publishDate}</small>
    {/* <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    /> */}
    {article.tags.map(tag => (
      <p className={styles.tag} key={tag}>
        {tag}
      </p>
    ))}
  </div>
)
