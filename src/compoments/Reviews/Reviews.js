import Stars from "../stars/stars";

const Reviews = (props) => {

    const reviews = props.reviews.map((item, index) => {
        return (
        <div key={index}>
            <div className='Cart-reviews-content-author' >
                <div><span>{item.name}</span></div>
                <Stars number={item.rating} />
            </div>
            <div className='Cart-reviews-content-text'>
                <span>{item.text}</span>
            </div>
        </div>
        )
    })

    return (
        <div>
            {reviews}
        </div>
    )
}

export default Reviews;