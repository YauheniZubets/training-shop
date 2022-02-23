import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import PhoneLogo from './PhoneLogo.svg';
import MapPoint from './map.svg';
import ClockLogo from './ClockLogo.svg';
import Search from './search.svg';
import World from './world.svg';
import Login from './login.svg';
import Cart from './cart.svg';

import Social from '../../compoments/social/Social';

import './PagesLinks.css';
import "@fontsource/spartan";
import "@fontsource/playfair-display-sc";

const PagesLinks = () => {

    const [isMenuOpen, toogleMenu] = useState(false);

    useEffect(()=>{
        isMenuOpen ? disablePageScroll(document.body) : enablePageScroll(document.body);
    })

    function onClickCross () {
        toogleMenuMode();
    }

    const onClickNav = (ev) =>  {
        const target = ev.target;
        if (isMenuOpen && !target.closest('Mobile-Menu')) toogleMenu(!isMenuOpen);
    }

    function toogleMenuMode() {
        toogleMenu(!isMenuOpen);
    }

    return(
        <section className='Navigation' data-test-id='menu' onClick={onClickNav}>
            <div className='SocialAndContact'>
                <div className='Main-Info'>
                    <div className='Contacts'>
                        <div className='Left-Cont'>
                            <div className='Phone'>
                                <img src={PhoneLogo} alt='phone'></img>
                                <span className='NaviInfo'>+375 29 100 20 30</span>
                            </div>
                            <div className='Location'>
                                <img src={MapPoint} alt='map'></img>
                                <span className='NaviInfo'>Belarus, Gomel, Lange 17</span>
                            </div>
                            <div className='Clock'>
                                <img src={ClockLogo} alt='clock'></img>
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
                        <Link to='/' data-test-id='header-logo-link'>
                            <span>CleverShop</span>
                        </Link>
                    </div>
                    <div className='Nav-Links' data-test-id='menu'>
                        <Link to='/'><span>About Us</span></Link>
                        <Link to='/women' data-test-id='menu-link-women'><span>Women</span></Link>
                        <Link to='/men' data-test-id='menu-link-men'><span>Men</span></Link>
                        <Link to='/'><span>Beauty</span></Link>
                        <Link to='/'><span>Accessories</span></Link>
                        <Link to='/'><span>Blog</span></Link>
                        <Link to='/'><span>Contact</span></Link>
                    </div>
                    <div className='Search-Bar'>
                        <div><img src={Search} alt='search'/></div>
                        <div><img src={World} alt='world'/></div>
                        <div><img src={Login} alt='login' /></div>
                        <div className='Search-Bar-Cart'><img src={Cart} alt='cart' />
                            <div className='Search-Bar-Numb'><span>2</span></div>
                        </div>
                        <div 
                            className={classNames('Burger', {visible: isMenuOpen})} 
                            onClick = {onClickCross}
                            data-test-id = 'burger-menu-btn'
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div 
                        className={classNames('Mobile-Menu', {[`Mobile-Menu-Visible`]: isMenuOpen})} 
                        onClick={onClickCross}
                        data-test-id = 'burger-menu'
                    >
                        <div className='Nav-Links-Mobile'>
                            <Link to='/'><span>About Us</span></Link>
                            <Link to='/women' data-test-id='menu-link-women'><span>Women</span></Link>
                            <Link to='/men' data-test-id='menu-link-men'><span>Men</span></Link>
                            <Link to='/'><span>Beauty</span></Link>
                            <Link to='/'><span>Accessories</span></Link>
                            <Link to='/'><span>Blog</span></Link>
                            <Link to='/'><span>Contact</span></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PagesLinks;