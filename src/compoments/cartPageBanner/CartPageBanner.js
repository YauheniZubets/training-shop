import share from './img/share.svg';
import fullStar from './img/fullStar.svg';

import './CartPageBanner.css';

const CartPageBanner = () => {
    return (
        <section className="Cart-Page-Banner">
            <div className='Cart-Page-Banner-bord'>
                <div className='Main-Info'>
                    <div className=" Cart-Page-Banner-Top">
                        <div>
                            <span>Home</span>
                            <span>►</span>
                            <span>Women</span>
                            <span>►</span>
                            <span >Women's tracksuit Q109</span>
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
                    <span>Women's tracksuit Q109</span>
                </div>
            </div>
            <div className='Cart-Page-Banner-bord-footer'>
                <div className='Main-Info'>
                    <div className='Cart-Page-Banner-bord-footer-content'>
                        <div className='Women-Card-Stars'>
                            <div><img src={fullStar} alt='star' /></div>
                            <div><img src={fullStar} alt='star' /></div>
                            <div><img src={fullStar} alt='star' /></div>
                            <div><img src={fullStar} alt='star' /></div>
                            <div><img src={fullStar} alt='star' /></div>
                            <span className='Cart-Page-Banner-bord-footer-span'>2 Reviews</span>
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