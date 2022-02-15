import { Link } from 'react-router-dom';
import Social from '../social/Social';

import phoneLogo from '../../pages/pagesLinks/PhoneLogo.svg';
import clockLogo from './img/clock.svg';
import mapLogo from './img/mapLogo.svg';
import letterLogo from './img/letterLogo.svg';
import aes from './img/aes.png';
import stripe from './img/stripe.png';
import visa from './img/visa.png';
import master from './img/mastercard.png';
import paypal from './img/paypal.png';
import discover from './img/discover.png';
import american from './img/american.png';

import './Footer.css';


const Footer = () => {
    return (
        <section className='Footer'>
            <div className='Footer-line'>
                <div className='Main-Info'>
                    <div className='Footer-line-content'>
                        <div className='Footer-line-descr'>
                            <span>BE IN TOUCH WITH US:</span>
                        </div>
                        <div>
                            <input className='Footer-line-input' type='text' placeholder='Enter your email' />
                            <input className='Footer-line-button' type='button' value='Join Us' />
                        </div>
                        <div>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
            <div className='Main-Info'>
                <div className='Footer-links'>
                    <div className='Footer-links-categories Footer-links-flex'>
                        <div>Categories</div>
                        <div><Link to='/women'><span>Woman</span></Link></div>
                        <div><Link to='/men'><span>Men</span></Link></div>
                        <div><Link to='/'><span>Accessories</span></Link></div>
                        <div><Link to='/'><span>Beauty</span></Link></div>
                    </div>
                    <div className='Footer-links-quiz Footer-links-flex'>
                        <div>Infomation</div>
                        <div>About Us</div>
                        <div>Contact Us</div>
                        <div>Blog</div>
                        <div>FAQs</div>
                    </div>
                    <div className='Footer-links-useful Footer-links-flex'>
                        <div>Useful links</div>
                        <div>Terms & Conditions</div>
                        <div>Reurns & Exchanges</div>
                        <div>Shipping & Delivery</div>
                        <div>Privacy Policy</div>
                    </div>
                    <div className='Footer-links-contacts Footer-links-flex'>
                        <div>CONTACT US</div>
                        <div>
                            <img src={mapLogo} alt='map-logo'></img>
                            <span>Belarus, Gomel, Lange 17</span>
                        </div>
                        <div>
                            <img src={phoneLogo} alt='phone-logo'></img>
                            <span>+375 29 100 20 30</span>
                        </div>
                        <div>
                            <img src={clockLogo} alt='clock-logo'></img>
                            <span>All week 24/7</span>
                        </div>
                        <div>
                            <img src={letterLogo} alt='letter-logo'></img>
                            <span>info@clevertec.ru</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Footer-line-down'>
                <div className='Main-Info'>
                    <div className='Footer-line-down-content'>
                        <div>
                            <span>Copyright © 2032 all rights reserved</span>
                        </div>
                        <div>
                            <img src={stripe} alt='stripe-logo' />
                            <img src={aes} alt='aes-logo' />
                            <img src={paypal} alt='paypal-logo' />
                            <img src={visa} alt='visa-logo' />
                            <img src={master} alt='master-logo' />
                            <img src={discover} alt='discover-logo' />
                            <img src={american} alt='american-logo' />
                        </div>
                        <div>
                            <span>Clevertec.ru/training</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Footer;