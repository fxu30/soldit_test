import React from 'react'

const SellerReviewItem = (props) => {
  return (
    <div className="group-351 flex-row">
      <p className="txt-245 flex-hcenter">{props.name}</p>
      <p className="txt-582">{props.rating} stars</p>
      <p className="txt-250">{props.description}</p>

    </div >

  )
}

export default SellerReviewItem