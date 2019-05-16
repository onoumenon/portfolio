import React from 'react'
import { Link } from 'gatsby'
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './article-preview.module.css'

export default ({ article }) => (
  <Card inverse style={{ backgroundColor: '#16192c' }}>
    <CardBody>
      <Link to={`/blog/${article.slug}`}>
        <CardImg alt={article.slug} src={article.heroImage.fluid.src} />
        <CardTitle className={styles.previewTitle}>{article.title}</CardTitle>
      </Link>
      <a href={article.url}>
        <FontAwesomeIcon className="icon article" icon="globe-asia" size="2x" />
      </a>
      <a href={article.github}>
        <FontAwesomeIcon
          className="icon article"
          icon={['fab', 'github']}
          size="2x"
        />
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
