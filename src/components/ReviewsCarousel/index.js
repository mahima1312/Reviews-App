import {Component} from 'react'
import './index.css'

class ReviewCarousel extends Component {
  state = {activeReviewId: 0}

  renderReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickRightArrow = () => {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props
    if (activeReviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activeReviewId} = this.state
    if (activeReviewId > 0) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewId} = this.state
    const currentReviewId = reviewsList[activeReviewId]

    return (
      <div className="app-container">
        <div className="reviews">
          <h1 className="heading">Reviews</h1>
          <div className="profile-container">
            <button
              className="btn"
              data-testid="leftArrow"
              type="button"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            {this.renderReview(currentReviewId)}
            <button
              className="btn"
              data-testid="rightArrow"
              type="button"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
