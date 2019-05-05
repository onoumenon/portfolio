import React from 'react'
import { Link } from 'gatsby'
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './article-preview.module.css'

export default ({ article }) => (
  <Card>
    <CardBody>
      <Link to={`/blog/${article.slug}`}>
        <CardImg alt={article.slug} src={article.heroImage.fluid.src} />
        <CardTitle className={styles.previewTitle}>{article.title}</CardTitle>
      </Link>

      <a href={article.url}>
        <FontAwesomeIcon className="icon" icon="globe-asia" />
      </a>
      <a href={article.github}>
        <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
      </a>
      <br />
      {article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))}
    </CardBody>
  </Card>
)
