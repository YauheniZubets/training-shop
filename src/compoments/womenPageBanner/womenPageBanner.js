import share from './img/share.svg';
import filter from './img/filter.svg';
import sort from './img/sort.svg';
import view from './img/view.svg';

import './womenPageBanner.css';

const WomenPageBanner = () => {
    return (
        <section className="Women-Page-Banner">
            <div className='Women-Page-Banner-bord'>
                <div className='Main-Info'>
                    <div className="Women-Page-Banner-Top">
                        <div>
                            <span>Home</span>
                            <span>►</span>
                            <span>Women</span>
                        </div>
                        <div>
                            <img src={share} />
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Women-Page-Banner-bord-bottom'>
                <div className='Women-Page-Banner-name'>
                    <span>WOMEN</span>
                </div>
            </div>
            <div className='Filter'>
                <div className='Main-Info'>
                    <div className='Filter-content'>
                        <div>
                            <img src={filter} />
                            <span>Filter</span>
                        </div>
                        <div>
                            <img src={sort} />
                            <img src={view} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WomenPageBanner;