import React, {Component} from 'react'
import history from '../history'

export default class home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="home-text">
            <div className="home-text1">Family Games </div>
            <div className="home-text2">Shop our wide selections of games </div>
            <div>
              <button
                className="home-text3"
                type="button"
                onClick={() => history.push(`/products`)}
              >
                Shop
              </button>
            </div>
          </div>
          <div>
            <img
              className="home-cover"
              src="https://res.cloudinary.com/dsi0jbonx/image/upload/v1595617499/boardgame_CP_qfyt7y.jpg"
            />
          </div>
        </div>
        <div>
          <div>Staff Picks</div>
        </div>
        <div>Under Construction</div>
      </div>
    )
  }
}
