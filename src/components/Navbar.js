import React from 'react'
//import { Link } from 'gatsby'
import { Link, FormattedMessage } from "gatsby-plugin-intl"

//
import logo from '../img/logo.jpg'
import Language from '../components/language'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
              <img src={logo} alt="logo" />
            </Link>

            <Language />

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
              
              {/* <Link className="navbar-item" to="/blog">
                <FormattedMessage id="nav02" />
              </Link> */}
              <Link className="navbar-item" to="/online">
                <FormattedMessage id="nav03" />
              </Link>
              <Link className="navbar-item" to="/contact">
                <FormattedMessage id="book" />
              </Link>
            </div>
            
          </div>
          
        </div>
      </nav>
    )
  }
}

export default Navbar
