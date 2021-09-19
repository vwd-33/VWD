import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

// eslint-disable-next-line
export const ProductPageTemplate = ({
  image,
  title,
  description2,
  labels,
}) => (
  <div className="content">
    <img
      alt="top product"
      className="top-image"
      src='/img/vwd-logo-censored-3-copy.png'
    />
    <h2
      className="has-text-weight-bold is-size-1 header-with-background"
      style={{
        textAlign: 'center',
        color: 'white',
        padding: '1rem',
      }}
    >
      {title}
    </h2>
     <section className="distroDescription">
     {description2.email && <p className="distroDescription__email">{description2.emailText}: <a href={`mailto: ${description2.email}`}>{description2.email}</a></p>}
      {description2.descriptionList.map(e => <div key={e.text} className="distroDescription__topText" dangerouslySetInnerHTML={{__html: remark().use(recommended).use(remarkHtml).processSync(e.text).contents}}></div>)}
    </section>
    <section className="distroLabels">
      {labels.map(labelSection => {
        return(
        <div key={labelSection.title}>
          <h3 className="distro__labelTitle" dangerouslySetInnerHTML={{__html: remark().use(recommended).use(remarkHtml).processSync(labelSection.title).contents}}></h3>
          <p className="distro__itemTitle" dangerouslySetInnerHTML={{__html: remark().use(recommended).use(remarkHtml).processSync(labelSection.body).contents}}></p>
        </div>
        )
      })}
    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description2: PropTypes.shape({
    emailText: PropTypes.string,
    email: PropTypes.string,
    descriptionList: PropTypes.array,
  }),
  labels: PropTypes.array,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        email={frontmatter.email}
        emailText={frontmatter.emailText}
        description2={frontmatter.description2}
        labels={frontmatter.labels}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        description2 {
          email
          emailText
          descriptionList {
            text
          }
        }
        labels {
          title
          body
        }
      }
    }
  }
`
