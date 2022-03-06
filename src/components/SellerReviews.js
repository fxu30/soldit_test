import React, { useEffect, useState } from 'react'
import SellerReviewItem from './SellerReviewItem'

const SellerReviews = () => {
    const [reviews, setReviews] = useState([{
        id: 0,
        name: '',
        description: "",
        rating: 0,
        senderId: 0
    }])

    useEffect(() => {
        // for test
        setReviews([{
            id: 1,
            name: 'Ziming Tan',
            description: 'nice seller',
            rating: 5,
            senderId: 1
        },
        {
            id: 2,
            name: 'Feiye Chen',
            description: 'nice seller',
            rating: 4,
            senderId: 2
        }
        ])
    }, [])


    return (
        <div className="group-242 flex-col">
            <div className="collection-priced-ad flex-row-vstart-hstart">
                <div className="group-852 flex-col-hend">
                    
                        {
                            reviews.map(review => (
                                <SellerReviewItem id={review.id} name={review.name}
                                    description={review.description} rating={review.rating} />
                            ))
                        }
                   
                </div>
            </div>
        </div>



        // <div>
        //     {
        //         reviews.map(review => (
        //             <SellerReviewItem id={review.id} name={review.name}
        //                 description={review.description} rating={review.rating} />
        //         ))
        //     }
        // </div>
    )
}

export default SellerReviews