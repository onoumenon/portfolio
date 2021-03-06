import React from 'react'
import { Link } from 'gatsby'
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  UncontrolledCollapse,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './article-preview.module.css'

export default ({ article }) => (
  <Card inverse className="card20">
    <CardBody>
      <Link to={`/blog/${article.slug}`}>
        <UncontrolledCollapse toggler="#toggleImg">
          <CardImg
            alt={article.slug}
            src={`/images/${article.slug}.png`}
            className="toggleImg"
          />
        </UncontrolledCollapse>
      </Link>
      <CardImg
        alt={article.slug}
        src={article.heroImage.fluid.src}
        className="cube"
        id="toggleImg"
      />
      <Link to={`/blog/${article.slug}`}>
        <CardTitle className={styles.previewTitle}>{article.title}</CardTitle>
      </Link>
      <a href={article.url}>
        <FontAwesomeIcon className="icon article" icon="globe-asia" size="lg" />
      </a>
      <a href={article.github}>
        <FontAwesomeIcon
          className="icon article"
          icon={['fab', 'github']}
          size="lg"
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
