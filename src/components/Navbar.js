import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/thumbnail.png'
/* eslint-disable */

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }
  componentDidMount () {
      const m=document.createElement("script");
      const p=document.getElementsByTagName("script")[0];
      m.async=1;
      m.src="https://chimpstatic.com/mcjs-connected/js/users/2f28a1660890d2f972dc09983/3c244bee894f7f5b8afa108f6.js";
      p.parentNode.insertBefore(m,p);
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Vinlandic Werwolf Distribution" style={{ width: '40px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {/* <Link className="navbar-item" to="/about">
                About
              </Link> */}
              <Link className="navbar-item" to="/distro">
                Distro
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a className="navbar-item" target="blank" href="https://bigcartel.us18.list-manage.com/subscribe?u=2f28a1660890d2f972dc09983&id=56aa869c01">
                Newsletter Subscription
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
