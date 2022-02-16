const ProductCard = () => {
    return (
        <div className='Womens-Card'>
            <Link to='/cart' data-test-id='clothes-card-women'>
                <div className='Womens-Card-Image' style={{background:`url(${women1}) no-repeat center center`}}></div>
                <div className='Womens-Card-Descr'>
                    <div className='Womens-Card-Name'>
                        <span>Women's tracksuit Q109</span>
                    </div>
                    <div className='Womens-Card-Price'>
                        <span>$ 30.00</span>
                    </div>
                    <div className='Women-Card-Stars'>
                        <div><img src={fullStar} alt='star' /></div>
                        <div><img src={fullStar} alt='star' /></div>
                        <div><img src={fullStar} alt='star' /></div>
                        <div><img src={fullStar} alt='star' /></div>
                        <div><img src={emptyStar} alt='estar' /></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;