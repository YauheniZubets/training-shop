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

import './CartPageBody.css';

const CartPageBody = () => {
    return (
        <section className='Cart-page-body'>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPageBody;