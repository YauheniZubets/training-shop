import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import LargeImage from './img/large.png';
import WomanBanner from './img/woman-banner.png';
import MenBanner from './img/men-banner.png';
import AccesBanner from './img/acces-banner.png';

import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {

    
    return (
        <section className="Main-Page">
            <div className="Main-Info-Borders">
                <div className="Main-Content">
                        <Swiper 
                            navigation={true} 
                            modules={[Navigation]} 
                            className="mySwiper Large-Image"
                            data-test-id = 'main-slider'
                        >
                            <SwiperSlide style={{background:`url(${LargeImage}) no-repeat center center`}}>
                                <div className="Banner Banner-Center Big-Banner">
                                    <span>Banner</span><br />
                                    <span>YOUR TITLE TEXT</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{background:`url(${LargeImage}) no-repeat center center`}}>
                                <div className="Banner Banner-Center Big-Banner">
                                    <span>Banner</span><br />
                                    <span>YOUR TITLE TEXT</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{background:`url(${LargeImage}) no-repeat center center`}}>
                                <div className="Banner Banner-Center Big-Banner">
                                    <span>Banner</span><br />
                                    <span>YOUR TITLE TEXT</span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    <div className="Banners">
                        <div className="MenWomanBanner">
                                <div className="Woman-Banner" style={{background:`url(${WomanBanner}) no-repeat center center`}}>
                                    <Link to='/women'>
                                        <div className="Banner Small-Center Small-banner">
                                            <span className="Small-Banners">WOMEN</span>
                                        </div>
                                    </Link>
                                </div>
                            <div className="Men-Banner" style={{background:`url(${MenBanner}) no-repeat center center`}}>
                                <Link to='/men'>
                                    <div className="Banner Small-Center Small-banner">
                                        <span className="Small-Banners">MEN</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="Acc-Banner" style={{background:`url(${AccesBanner}) no-repeat center center`}}>
                            <div className="Banner Banner-Center">
                                <span className="Small-Banners">ACCESSORIES</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;