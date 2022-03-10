import { useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs} from "swiper";
import { Link } from 'react-router-dom';

import Stars from '../stars/stars';
import SizesString from "../sizesString/SizesString";
import Reviews from "../Reviews/Reviews";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import ArrowTop from './img/arrowtop.svg';
import ArrowBot from './img/arrowbottom.svg';
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
import fotWomen1 from './img/fotwomen1.png';
import fotWomen2 from './img/fotwomen2.png';
import fotWomen3 from './img/fotwomen3.png';
import fotWomen4 from './img/fotwomen4.png';

import './CartPageBody.css';

const CartPageBody = (props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null); //for swiper
    const [curColor, setCurColor] = useState(props.product.images[0].color);
    const [curSize, setCurSize] = useState(props.product.sizes[0]);
    console.log('props in cart: ', props);

    const cbChangeColor = (ev) => {
        const target = ev.target;
        const val = target.alt;
        curColor !== val && setCurColor(val);
    }

    const cbChangeSize = (ev) => {
        const target = ev.target;
        const val = target.textContent;
        curSize !== val && setCurSize(val);
    }

    const swiperImagesVert = props.product.images.map((item, index)=> {
        return (
            <SwiperSlide key={index}>
                <div className='Cart-Vertical-gallery-img' style={{background:`url(https://training.cleverland.by/shop${item.url}) center / contain no-repeat`}}></div>
            </SwiperSlide>
        )
    })

    const swiperImagesBig = props.product.images.map((item, index)=> {
        return (
            <SwiperSlide key={index} style={{background:`url(https://training.cleverland.by/shop${item.url}) center / contain no-repeat`}}>
            </SwiperSlide>
        )
    })

    const colorsNamesAdd = props.product.images.map((item, index)=> {
        return <span key={index}>{item.color}, </span>
    })


    const imageColors = props.product.images.map((item, index) => {
        return <img src={`https://training.cleverland.by/shop${item.url}`} alt={item.color} key={index} />
    })

    const sizes = props.product.sizes.map((item, index) => {
        return <div key={index}><span>{item}</span></div>
    })

    return (
        
        <section className='Cart-page-body' data-test-id='product-page-women'>
            <div className='Main-Info'>
                <div className='Cart-page-body-content'>
                    <div className="Cart-Vertical-gallery">
                        <div className='Arrows'>
                            <div className="Arrow">
                                <img className="Arrow-center Arrow-gal-left" src={ArrowTop} alt='leftaroow' />
                            </div>
                            <div className="Arrow">
                                <img className="Arrow-center Arrow-gal-right" src={ArrowBot} alt='rightaroow' />
                            </div>
                        </div>
                        <Swiper 
                            // navigation={true} 
                            onSwiper={setThumbsSwiper}
                            spaceBetween={80}
                            slidesPerView={props.product.images.length}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]} 
                            direction={'vertical'}
                            navigation={{
                                nextEl: '.Arrow-gal-right',
                                prevEl: '.Arrow-gal-left',
                                disabledClass: 'opacity-nav'
                            }}
                            className="mySwiper"
                            data-test-id = 'product-slider'
                            breakpoints={{
                                761: {
                                    direction:'vertical'
                                },
                                300: {
                                    direction:'horizontal'
                                }
                            }} 
                        >   
                            {swiperImagesVert}
                        </Swiper>
                    </div>
                    <Swiper 
                        navigation={true} 
                        modules={[Navigation, FreeMode, Thumbs]}
                        thumbs={{ swiper: thumbsSwiper,
                            thumbsContainerClass: 'opacity-swiper',
                            slideThumbActiveClass: 'opacity-active',
                         }}
                        className="mySwiper Cart-main-photo"
                        data-test-id = 'product-slider'
                    >
                        {swiperImagesBig}
                    </Swiper>
                    <div className='Cart-descr'>
                        <div className='Cart-color'>
                            <span>Color: </span><span>{curColor}</span>
                        </div>
                        <div className='Cart-other-colors' onClick={cbChangeColor}>
                            {imageColors}
                        </div>
                        <div className='Cart-size'>
                            <span>Size: </span><span>{curSize}</span>
                        </div>
                        <div className='Cart-allsizes' onClick={cbChangeSize}>
                            {sizes}
                        </div>
                        <div className='Cart-sizeguide'>
                            <img src={sizeguide} alt='gui' />
                            <span>Size guide</span>
                        </div>
                        <div className='Bottom-bord'></div>
                        <div className='Cart-price-info'>
                            <span className='Price'>$ {props.product.price}</span>
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
                                    <span>Color: </span><span>{colorsNamesAdd}</span>
                                </div>
                                <div>
                                    <span>Size: </span><SizesString sizesStr={props.product.sizes} />
                                </div>
                                <div>
                                    <span>Material: </span><span>{props.product.material}</span>
                                </div>
                            </div>
                        </div>
                        <div className='Bottom-bord'></div>
                        <div className='Cart-reviews'>
                            <div className='Cart-reviews-name'><span>REVIEWS</span></div>
                            <div className='Cart-reviews-stars' >
                            <div>
                                <Stars number={props.product.rating} />
                                <span className='Cart-Page-Banner-bord-footer-span'>{props.product.reviews.length} Reviews</span>
                            </div>
                                <div>
                                    <img src={question} alt='quis' />
                                    <span>Write a review</span>
                                </div>
                            </div>
                            <div className='Cart-reviews-content'>
                                <Reviews reviews={props.product.reviews} />
                            </div>
                            <div className='Bottom-bord'></div>
                        </div>
                    </div>
                </div>
                <div className='Cart-page-body-footer'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper Cart-page-body-footer-cards"
                        breakpoints={{
                            // when window width is >= 640px
                            300: {
                            slidesPerView: 1,
                            },
                            570: {
                            slidesPerView: 1,
                            },
                            600: {
                            slidesPerView: 2,
                            },
                            870: {
                            slidesPerView: 3,
                            },
                            1100: {
                            slidesPerView: 3,
                            },
                            1300: {
                            slidesPerView: 4,
                            },
                        }}
                        data-test-id = 'related-slider'
                    >
                        <div className='Cart-page-body-footer-name'>
                            <div><span>RELATED PRODUCTS</span></div>
                        </div>
                        <SwiperSlide>
                            <Link to='/cart/women/1' data-test-id='clothes-card-women'>
                                <div className='Womens-Card-Image' style={{background:`url(${fotWomen1}) no-repeat center center`}}></div>
                                <div className='Womens-Card-Descr'>
                                    <div className='Womens-Card-Name'>
                                        <span>Women's tracksuit Q109</span>
                                    </div>
                                    <div className="Womens-Card-Price-stars">
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
                                    
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default CartPageBody;