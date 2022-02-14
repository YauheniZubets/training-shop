import { Link } from 'react-router-dom';
import PhoneLogo from './PhoneLogo.svg';
import MapPoint from './map.svg';
import ClockLogo from './ClockLogo.svg';
import Search from './search.svg';
import World from './world.svg';
import Login from './login.svg';
import Head from './head.svg';
import Cart from './cart.svg';
import Ellipse from './ellipse.svg';

import Social from '../../compoments/social/Social';

import './PagesLinks.css';
import "@fontsource/spartan";
import "@fontsource/playfair-display-sc";

const PagesLinks = () => {
    return(
        <section className='Navigation'>
            <div className='SocialAndContact'>
                <div className='Main-Info'>
                    <div className='Contacts'>
                        <div className='Left-Cont'>
                            <div className='Phone'>
                                <img src={PhoneLogo}></img>
                                <span className='NaviInfo'>+375 29 100 20 30</span>
                            </div>
                            <div className='Location'>
                                <img src={MapPoint}></img>
                                <span className='NaviInfo'>Belarus, Gomel, Lange 17</span>
                            </div>
                            <div>
                                <img src={ClockLogo}></img>
                                <span className='NaviInfo'>All week 24/7</span>
                            </div>
                        </div>
                        <Social />
                    </div>
                </div>
            </div>
            <div className='All-Links'>
                <div className='Main-Info Header'>
                    <div className='Shop-Name'>
                        <Link to='/'>
                            <span>CleverShop</span>
                        </Link>
                    </div>
                    <div className='Nav-Links'>
                        <Link to='/'><span>About Us</span></Link>
                        <Link to='/women'><span>Women</span></Link>
                        <Link to='/men'><span>Men</span></Link>
                        <Link to='/'><span>Beauty</span></Link>
                        <Link to='/'><span>Accessories</span></Link>
                        <Link to='/'><span>Blog</span></Link>
                        <Link to='/'><span>Contact</span></Link>
                    </div>
                    <div className='Search-Bar'>
                        <div><img src={Search} /></div>
                        <div><img src={World} /></div>
                        <div>
                            <img src={Login} />
                        </div>
                        <div><img src={Cart} /></div>
                        <div><span>2</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PagesLinks;