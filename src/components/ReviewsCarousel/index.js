import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onLeftClick = () => {
    const {id} = this.state
    if (id !== 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  onRightClick = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    if (id !== reviewsList.length - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[id]

    return (
      <div className="app-container">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>
          <div>
            <img src={imgUrl} alt={username} className="profile-img" />
          </div>
          <p className="name">{username}</p>
          <div className="button-container">
            <button className="button" type="button" onClick={this.onLeftClick}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <button
              className="button"
              type="button"
              onClick={this.onRightClick}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="companyName">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
