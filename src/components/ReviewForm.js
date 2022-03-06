import React from 'react'
import HoverRating from './HoverRating'

const ReviewForm = () => {
  return (
    <div className="review-form-container flex-col-hstart-vstart">
      <div className="flex-col">
        <p className="review-form-target">To: Ziming Tan</p>
        <HoverRating />
        <form className="comment-form flex-col-hend" action=''>
          <textarea cols="75"></textarea>
          <button type="submit">Submit</button>
          
        </form>
      </div>
    </div>
  )
}

export default ReviewForm