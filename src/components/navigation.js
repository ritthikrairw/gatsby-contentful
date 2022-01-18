import React from 'react'
import { Link, Trans } from 'gatsby-plugin-react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>Gatsby Starter Contentful</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          <Trans>Home</Trans>
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          <Trans>Blog</Trans>
        </Link>
      </li>
    </ul>
    <LanguageSwitcher />
  </nav>
)

export default Navigation
