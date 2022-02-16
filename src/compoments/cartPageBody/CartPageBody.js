import ArrowTop from './img/arrowtop.svg';
import ArrowBot from './img/arrowbottom.svg';
import LeftArrow from './img/leftArrow.svg';
import RightArrow from './img/rightArrow.svg';
import vert1 from './img/vert1.png';
import vert2 from './img/vert2.png';
import vert3 from './img/vert3.png';
import vert4 from './img/vert4.png';
import Cartmain from './img/cartMain.png';
import color1 from './img/colors1.png';
import color2 from './img/colors2.png';
import color3 from './img/colors3.png';
import color4 from './img/colors4.png';
import sizeguide from './img/sizeguide.svg';
import heart from './img/heart.svg';
import compare from './img/compare.svg';
import shipping from './img/shipping.svg';
import ret from './img/return.svg';
import question from './img/question.svg';
import aes from './img/aes.png';
import stripe from './img/stripe.png';
import paypal from './img/paypal.png';
import visa from './img/visa.png';
import mastercard from './img/mastercard.png';
import discover from './img/discover.png';
import american from './img/american.png';
import fullStar from './img/fullStar.svg';
import emptyStar from './img/emptyStar.svg';
import fullStarSmall from './img/fullStarSmall.svg';
import fotWomen1 from './img/fotwomen1.png';
import fotWomen2 from './img/fotwomen2.png';
import fotWomen3 from './img/fotwomen3.png';
import fotWomen4 from './img/fotwomen4.png';

import { Link } from 'react-router-dom';

import './CartPageBody.css';

const CartPageBody = () => {
    return (
        <section className='Cart-page-body' data-test-id='product-page-women'>
            <div className='Main-Info'>
                <div className='Cart-page-body-content'>
                    <div className='Cart-Vertical-gallery'>
                        <div className='Arrows'>
                            <div className="Arrow">
                                <img className="Arrow-center" src={ArrowTop} alt='leftaroow' />
                            </div>
                            <div className="Arrow">
                                <img className="Arrow-center" src={ArrowBot} alt='rightaroow' />
                            </div>
                        </div>
                        <div style={{background:`url(${vert1}) no-repeat center center`}}></div>
                        <div style={{background:`url(${vert2}) no-repeat center center`}}></div>
                        <div style={{background:`url(${vert3}) no-repeat center center`}}></div>
                        <div style={{background:`url(${vert4}) no-repeat center center`}}></div>
                    </div>
                    <div className='Cart-main-photo' 
                        style={{background:`url(${Cartmain}) no-repeat center center`}}
                    >
                        <div className="Arrow Arrow-Left">
                            <img className="Arrow-center" src={LeftArrow} alt='leftaroow' />
                        </div>
                        <div className="Arrow Arrow-Right">
                            <img className="Arrow-center" src={RightArrow} alt='rightaroow' />
                        </div>
                    </div>
                    <div className='Cart-descr'>
                        <div className='Cart-color'>
                            <span>Color: </span><span>Blue</span>
                        </div>
                        <div className='Cart-other-colors'>
                            <img src={color1} alt='col1' />
                            <img src={color2} alt='col2' />
                            <img src={color3} alt='col3' />
                            <img src={color4} alt='col4' />
                        </div>
                        <div className='Cart-size'>
                            <span>Size: </span><span>S</span>
                        </div>
                        <div className='Cart-allsizes'>
                            <div><span>XS</span></div>
                            <div><span>S</span></div>
                            <div><span>M</span></div>
                            <div><span>L</span></div>
                        </div>
                        <div className='Cart-sizeguide'>
                            <img src={sizeguide} alt='gui' />
                            <span>Size guide</span>
                        </div>
                        <div className='Bottom-bord'></div>
                        <div className='Cart-price-info'>
                            <span className='Price'>$ 379.99</span>
                            <input type='button' value='Add to card' />
                            <img src={heart} alt='heart' />
                            <img src={compare} alt='compare' />
                        </div>
                        <div className='Bottom-bord'></div>
                        <div className='Cart-shipping'>
                            <div>
                                <img src={shipping} alt='ship' />
                                <span>Shipping & Delivery</span>
                            </div>
                            <div>
                                <img src={ret} alt='return' />
                                <span>Returns & Exchanges</span>
                            </div>
                            <div>
                                <img src={question} alt='quis' />
                                <span>Ask a question</span>
                            </div>
                        </div>
                        <div className='Cart-checkoutline'>
                            <div><span>guaranteed safe checkout</span></div>
                            <div className='Bottom-bord'></div>
                        </div>
                        <div className="Cart-credit">
                            <img src={stripe} alt='stripe' />
                            <img src={aes} alt='aes' />
                            <img src={paypal} alt='paypal' />
                            <img src={visa} alt='visa' />
                            <img src={mastercard} alt='mastercard' />
                            <img src={discover} alt='discover' />
                            <img src={american} alt='american' />
                        </div>
                        <div className='Bottom-bord'></div>
                        <div className='Cart-description'>
                            <span>DESCRIPTION</span>
                        </div>
                        <div className='Bottom-bord'></div>
                        <div className='Cart-additional'>
                            <div>
                                <span>ADDITIONAL INFORMATION</span>
                            </div>
                            <div className='Cart-additional-content'>
                                <div>
                                    <span>Color: </span><span>Blue, White, Black, Grey</span>
                                </div>
                                <div>
                                    <span>Size: </span><span>XS, S, M, L</span>
                                </div>
                                <div>
                                    <span>Material: </span><span>100% Polyester</span>
                                </div>
                            </div>
                        </div>
                        <div className='Bottom-bord'></div>
                        <div className='Cart-reviews'>
                            <div className='Cart-reviews-name'><span>REVIEWS</span></div>
                            <div className='Cart-reviews-stars' >
                                <div className='Women-Card-Stars'>
                                    <div><img src={fullStar} alt='star' /></div>
                                    <div><img src={fullStar} alt='star' /></div>
                                    <div><img src={fullStar} alt='star' /></div>
                                    <div><img src={fullStar} alt='star' /></div>
                                    <div><img src={fullStar} alt='star' /></div>
                                    <span className='Cart-Page-Banner-bord-footer-span'>2 Reviews</span>
                                </div>
                                <div>
                                    <img src={question} alt='quis' />
                                    <span>Write a review</span>
                                </div>
                            </div>
                            <div className='Cart-reviews-content'>
                                <div>
                                    <div className='Cart-reviews-content-author'>
                                        <div><span>Oleh Chabanov</span></div>
                                        <div className='Women-Card-Stars'>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                        </div>
                                    </div>
                                    <div className='Cart-reviews-content-text'>
                                        <span>On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</span>
                                    </div>
                                    <div className='Cart-reviews-content-author'>
                                        <div><span>ShAmAn design</span></div>
                                        <div className='Women-Card-Stars'>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                            <div><img src={fullStarSmall} alt='star' /></div>
                                        </div>
                                    </div>
                                    <div className='Cart-reviews-content-text'>
                                        <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</span>
                                    </div>
                                </div>
                            </div>
                            <div className='Bottom-bord'></div>
                        </div>
                    </div>
                </div>
                <div className='Cart-page-body-footer'>
                    <div className='Cart-page-body-footer-name'>
                        <div><span>RELATED PRODUCTS</span></div>
                        <div className='Cart-page-body-footer-arrows'>
                            <div className="Arrow">
                                <img className="Arrow-center" src={LeftArrow} alt='leftaroow' />
                            </div>
                            <div className="Arrow">
                                <img className="Arrow-center" src={RightArrow} alt='rightaroow' />
                            </div>
                        </div>
                    </div>
                    <div className='Cart-page-body-footer-cards'>
                        <Link to='/cart/women/1' data-test-id='clothes-card-women'>
                            <div className='Womens-Card-Image' style={{background:`url(${fotWomen1}) no-repeat center center`}}></div>
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
                        <Link to='/cart/women/1' data-test-id='clothes-card-women'>
                            <div className='Womens-Card-Image' style={{background:`url(${fotWomen2}) no-repeat center center`}}></div>
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
                        <Link to='/cart/women/1' data-test-id='clothes-card-women'>
                            <div className='Womens-Card-Image' style={{background:`url(${fotWomen3}) no-repeat center center`}}></div>
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
                        <Link to='/cart/women/1' data-test-id='clothes-card-women'>
                            <div className='Womens-Card-Image' style={{background:`url(${fotWomen4}) no-repeat center center`}}></div>
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
                </div>
            </div>
        </section>
    )
}

export default CartPageBody;