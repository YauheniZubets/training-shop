import women1 from './img/women1.png';
import women2 from './img/women2.png';
import women3 from './img/women3.png';
import women4 from './img/women4.png';
import women5 from './img/women5.png';
import women6 from './img/women6.png';
import women7 from './img/women7.png';
import women8 from './img/women8.png';
import fullStar from './img/fullStar.svg';
import emptyStar from './img/emptyStar.svg';
import './Womens.css';

const Womens = () => {
    return (
        <section className='Womens'>
            <div className='Main-Info'>
                <div className='Womens-Header'>
                    <div className='Womens-Name'>
                        <span>WOMEN'S</span>
                    </div>
                    <div className='Womens-Links'>
                        <div><span>NEW ARRIVALS</span></div>
                        <div><span>SPECIALS</span></div>
                        <div><span>BESTSELLERS</span></div>
                        <div><span>MOST VIEWED</span></div>
                        <div><span>FEATURED PRODUCTS</span></div>
                    </div>
                </div>
                <div className='Womens-AllCards'>
                    <div className='Womens-Card'>
                        <div className='Womens-Card-Image' style={{background:`url(${women1}) no-repeat center center`}}></div>
                        <div className='Womens-Card-Descr'>
                            <div className='Womens-Card-Name'>
                                <span>Women's tracksuit Q109</span>
                            </div>
                            <div className='Womens-Card-Price'>
                                <span>$ 30.00</span>
                            </div>
                            <div className='Women-Card-Stars'>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={emptyStar} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='Womens-Card'>
                        <div className='Womens-Card-Image' style={{background:`url(${women2}) no-repeat center center`}}>
                            <div className='Womens-Card-Discount'>
                                <span className='Womens-Card-DiscountText'>-50%</span>
                            </div>
                        </div>
                        <div className='Womens-Card-Descr'>
                            <div className='Womens-Card-Name'>
                                <span>Women's tracksuit Q109</span>
                            </div>
                            <div className='Womens-Card-Price'>
                                <span>$ 30.00</span>
                                <span className='Womens-Card-Price-Disc'>$ 60.00</span>
                            </div>
                            <div className='Women-Card-Stars'>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={emptyStar} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='Womens-Card'><div className='Womens-Card-Image' style={{background:`url(${women3}) no-repeat center center`}}></div>
                        <div className='Womens-Card-Descr'>
                            <div className='Womens-Card-Name'>
                                <span>Women's tracksuit Q109</span>
                            </div>
                            <div className='Womens-Card-Price'>
                                <span>$ 30.00</span>
                            </div>
                            <div className='Women-Card-Stars'>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={emptyStar} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='Womens-Card'><div className='Womens-Card-Image' style={{background:`url(${women4}) no-repeat center center`}}></div>
                        <div className='Womens-Card-Descr'>
                            <div className='Womens-Card-Name'>
                                <span>Women's tracksuit Q109</span>
                            </div>
                            <div className='Womens-Card-Price'>
                                <span>$ 30.00</span>
                            </div>
                            <div className='Women-Card-Stars'>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={emptyStar} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='Womens-Card'><div className='Womens-Card-Image' style={{background:`url(${women5}) no-repeat center center`}}></div>
                        <div className='Womens-Card-Descr'>
                            <div className='Womens-Card-Name'>
                                <span>Women's tracksuit Q109</span>
                            </div>
                            <div className='Womens-Card-Price'>
                                <span>$ 30.00</span>
                            </div>
                            <div className='Women-Card-Stars'>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={emptyStar} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='Womens-Card'><div className='Womens-Card-Image' style={{background:`url(${women6}) no-repeat center center`}}></div>
                        <div className='Womens-Card-Descr'>
                            <div className='Womens-Card-Name'>
                                <span>Women's tracksuit Q109</span>
                            </div>
                            <div className='Womens-Card-Price'>
                                <span>$ 30.00</span>
                            </div>
                            <div className='Women-Card-Stars'>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={emptyStar} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='Womens-Card'>
                        <div className='Womens-Card-Image' style={{background:`url(${women7}) no-repeat center center`}}></div>
                        <div className='Womens-Card-Descr'>
                            <div className='Womens-Card-Name'>
                                <span>Women's tracksuit Q109</span>
                            </div>
                            <div className='Womens-Card-Price'>
                                <span>$ 30.00</span>
                            </div>
                            <div className='Women-Card-Stars'>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={emptyStar} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='Womens-Card'>
                        <div className='Womens-Card-Image' style={{background:`url(${women8}) no-repeat center center`}}></div>
                        <div className='Womens-Card-Descr'>
                            <div className='Womens-Card-Name'>
                                <span>Women's tracksuit Q109</span>
                            </div>
                            <div className='Womens-Card-Price'>
                                <span>$ 30.00</span>
                            </div>
                            <div className='Women-Card-Stars'>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={fullStar} /></div>
                                <div><img src={emptyStar} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Womens-See-All'>
                    <span>See All</span>
                </div>
            </div>
        </section>
    )
}

export default Womens;