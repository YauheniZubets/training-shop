import bigbanner from './img/bigBanner.png';
import girl from './img/girl.png';
import boy from './img/boy.png';
import './BigBanner.css';

const BigBanner = () => {
    return (
        <section className='Big-Banner-section'>
            <div className='Big-Banner-image' style={{background:`url(${bigbanner}) no-repeat center center`}}>
                <div className='Big-Banner-image-girl' style={{background:`url(${girl}) no-repeat center center`}}></div>
                <div className='Big-Banner-image-boy' style={{background:`url(${boy}) no-repeat center center`}}></div>
                <div className="Big-Banner-size Banner-Center Big-Banner-size-top">
                    <span>Special Offer</span>
                    <span className='Big-Banner-text'>Subscribe<br/> And <span className='Red-Text'>Get 10% Off</span></span>
                    <input className='Big-Banner-input' type='text' placeholder='Enter your email' />
                    <button className='Big-Banner-button'><span>Subscribe</span></button>
                </div>
            </div>
        </section>
    )
}

export default BigBanner;