import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Link to={`/blog/${article.slug}`}><Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      {article.title}
    </h3></Link>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {/* <p className={styles.tag}>{article.tags ? 'yes tags' : 'no tags' }</p> */}
    {article.tags && (
      article.tags.map(tag => (
        <p className={styles.tag} key={tag}>
          {tag}
        </p>
      ))
    )}
  </div>
)
