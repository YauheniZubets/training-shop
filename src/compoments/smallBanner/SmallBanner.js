import banner1 from './img/banner1.png';
import banner2 from './img/banner2.png';
import './SmallBanner.css';

const SmallBanner = () => {
    return (
        <section className='Small-Banner'>
            <div className='Main-Info'>
                <div className='Small_Banner-disp'>
                    <div className='Small_Banner-Image' style={{background:`url(${banner1}) no-repeat center center`}}>
                        <div className="Small_Banner-size Banner-Center Big-Banner">
                            <span>New Season</span><br />
                            <span>lookbook collection</span>
                        </div>
                    </div>
                    <div className='Small_Banner-Image' style={{background:`url(${banner2}) no-repeat center center`}}>
                        <div className="Small_Banner-size Banner-Center Big-Banner">
                            <span>Sale</span><br />
                            <span>Get UP to <span className='Red-Text'>50% off</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmallBanner;