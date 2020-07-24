import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* <div>dhgames</div> */}
    <div>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div className=" nav-group">
            {/* The navbar will show these links before you log in */}

            <div className="nav-list">
              <Link to="/">Home</Link>
              <Link to="/products">Shop</Link>
              <Link to="/mail-order">Mail Order</Link>
            </div>
            <div className="nav-list2">
              <Link to="/search">
                <img
                  className="nav-image"
                  src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1595452968/magify_glass_cy6vjq.png"
                />
              </Link>
              <Link to="/login">
                <img
                  className="nav-image"
                  src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1595451700/profile_fysysh.png"
                />
              </Link>
              <Link to="/cart/:id">
                <img
                  className="nav-image"
                  src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1595452715/bag_k31ojv.png"
                />
              </Link>
            </div>
            {/* <Link to="/login">Profile</Link>
          <Link to="/products">Shop</Link>
          <Link to="/cart/:id">Cart</Link>
          <Link to="/search">Search</Link>
          <Link to="/mail-order">Mail Order</Link> */}
            {/* <Link to="/signup">Sign Up</Link> */}
          </div>
        )}
      </nav>
    </div>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
