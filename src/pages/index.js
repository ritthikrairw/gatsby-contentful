import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={author.heroImage.gatsbyImageData}
          title={author.name}
          content={author.shortBio.shortBio}
        />
        <ArticlePreview posts={posts} />
        <Trans>Hi people</Trans>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      filter: { node_locale: { eq: $language } }
    ) {
      nodes {
        node_locale
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: {
        contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" }
        node_locale: { eq: $language }
      }
    ) {
      nodes {
        node_locale
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`