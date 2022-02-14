import carIcon from './img/carIcon.svg';
import returnIcon from './img/returnIcon.svg';
import supportIcon from './img/supportIcon.svg';

import './Support.css';


const Support = () => {
    return (
        <section className='Support'>
            <div className='Main-Info'>
                <div className='Support-Info'>
                    <div>
                        <div className='Support-Info-Image'>
                            <img src={carIcon} />
                        </div>
                        <div className='Support-Name'>
                            <span>FREE SHIPPING</span>
                        </div>
                        <div className='Support-Descr'>
                            <span>On all UA order or order above $100</span>
                        </div>
                    </div>
                    <div>
                        <div className='Support-Info-Image'>
                            <img src={returnIcon} />
                        </div>
                        <div className='Support-Name'>
                            <span>30 DAYS RETURN</span>
                        </div>
                        <div className='Support-Descr'>
                            <span>Simply return it within 30 days for an exchange</span>
                        </div>
                    </div>
                    <div>
                        <div className='Support-Info-Image'>
                            <img src={supportIcon} />
                        </div>
                        <div className='Support-Name'>
                            <span>SUPPORT 24/7</span>
                        </div>
                        <div className='Support-Descr'>
                            <span>Contact us 24 hours a day, 7 days a week</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Support;