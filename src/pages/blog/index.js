import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <img
          alt="blog-img-top"
          className="top-image"
          src={'/img/vwd-logo-censored-3-copy.png'}
        />
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              textAlign: 'center',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Posts
          </h1>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
