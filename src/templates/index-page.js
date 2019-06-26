import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({ image, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <img
        className="top-image"
        src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
      />
      <h2 className="index__title">{title}</h2>
      <PageContent className="index__content content" content={content} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/distro">
                        Distro
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
const { frontmatter } = data.markdownRemark
const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        contentComponent={HTMLContent}
        title={frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  // data: PropTypes.shape({
  //   markdownRemark: PropTypes.shape({
  //     frontmatter: PropTypes.object,
  //   }),
  // }),
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
