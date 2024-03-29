import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-2.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Vinlandic Werwolf Distribution"
            style={{ minWidth: '40%', maxHeight: '10rem' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li> */}
                    <li>
                      <Link className="navbar-item" to="/distro">
                        Distro
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/archive">
                        Release Archive
                      </Link>
                    </li>
                    {/* <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    {/* <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li> */}
                    <li>
                      <Link className="navbar-item" to="/subscribe">
                        Newsletter Subscription
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">Copyright 2021: Vinlandic Werwolf Distribution</p>
      </footer>
    )
  }
}

export default Footer
