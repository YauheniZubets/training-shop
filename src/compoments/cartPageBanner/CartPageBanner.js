import share from './img/share.svg';
import Stars from '../stars/stars';

import './CartPageBanner.css';

const CartPageBanner = (props) => {
    return (
        <section className="Cart-Page-Banner">
            <div className='Cart-Page-Banner-bord'>
                <div className='Main-Info'>
                    <div className=" Cart-Page-Banner-Top">
                        <div>
                            <span>Home</span>
                            <span>►</span>
                            <span>{props.product.category}</span>
                            <span>►</span>
                            <span >{props.product.name}</span>
                        </div>
                        <div>
                            <img src={share} alt='share' />
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Cart-Page-Banner-bord-bottom'>
                <div className='Cart-Page-Banner-name'>
                    <span>{props.product.name}</span>
                </div>
            </div>
            <div className='Cart-Page-Banner-bord-footer'>
                <div className='Main-Info'>
                    <div className='Cart-Page-Banner-bord-footer-content'>
                        <div>
                            <Stars number={props.product.rating} />
                            <span className='Cart-Page-Banner-bord-footer-span'>{props.product.reviews.length} Reviews</span>
                        </div>
                        
                        <div className='Cart-Page-Banner-bord-footer-content-bot'>
                            <span>SKU:</span><span>777</span>
                            <span>Availability:</span><span>In Stock</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 

export default CartPageBanner;