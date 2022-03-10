import { useEffect, useState } from 'react';

import share from './img/share.svg';
import filter from './img/filter.svg';
import sort from './img/sort.svg';
import view from './img/view.svg';
import { PRODUCTS } from '../products';
import './womenPageBanner.css';


const WomenPageBanner = (props) => {

    useEffect(()=>{
        console.log('useeffect: ', imagesArr);
        props.sortValueFunc(imagesArr, sizes, brand, area, price);
    })

    const [showFilter, setFilter] = useState(false);
    
    const [imagesArr, setImagesArr] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [brand, setBrand] = useState([]);
    const [price, setPrice] = useState([]);
    const [area, setArea] = useState('');

    const cbShowFilter = () => {
        showFilter ? setFilter(false) : setFilter(true);
    }

    const cbFilterChange = (ev) => {
        const target = ev.target;
        const value = target.value;
        const area = target.getAttribute('area');
        setArea(area);
        switch (area) {
            case 'images':
                let imagesSet = new Set(imagesArr);
                imagesSet.has(value) ? imagesSet.delete(value) : imagesSet.add(value);
                let setToArr = Array.from(imagesSet);
                setImagesArr(setToArr);
                break;
            case 'sizes':
                let sizesSet = new Set(sizes);
                sizesSet.has(value) ? sizesSet.delete(value) : sizesSet.add(value);
                let setToArrSizes = Array.from(sizesSet);
                setSizes(setToArrSizes);
                break;
            case 'brand':
                let brandSet = new Set(brand);
                brandSet.has(value) ? brandSet.delete(value) : brandSet.add(value);
                let setToArrBrand = Array.from(brandSet);
                setBrand(setToArrBrand);
                break;
            case 'price':
                let minVal = value.match(/[0-9]+/);
                let maxVal = value.match(/[0-9]+$/);
                price.push(+minVal[0], +maxVal[0]);
                let minimal = Math.min.apply(null, price);
                let maximal = Math.max.apply(null, price);
                let filteredPrice = price.filter((item)=>{
                    return item === minimal || item === maximal;
                })
                setPrice(filteredPrice);
                break;
        
            default:
                break;
        }
    }

    let colorsSet = new Set();
    let colorsArr = [];
    let sizesSet = new Set();
    let sizesArr = [];
    let brandsSet = new Set();
    let brandsArr = [];
    let pricesArr = ['$7-$50', '$50-$150', '$150-$300', '$300-$600', '$600-$1200', '$1200+']
    
    const filterFields = () => {
        for (const i of PRODUCTS[props.gender]) {
            for (const j of i.images) {
                colorsSet.add(j.color);
            }
            for (const k of i.sizes) {
                sizesSet.add(k);
            }
            brandsSet.add(i.brand);
        }
        colorsArr=Array.from(colorsSet);
        sizesArr=Array.from(sizesSet);
        brandsArr=Array.from(brandsSet);
    }

    filterFields();

    const colorsFilter = colorsArr.map((item, index) => {
        return (
            <div className='Filter-checkbox' key={index}>
                <input type='checkbox' value={item} area='images'/>
                <span>{item}</span>
            </div>
        )
    })

    const sizesFilter = sizesArr.map((item, index) => {
        return (
            <div className='Filter-checkbox' key={index}>
                <input type='checkbox' value={item} area='sizes'/>
                <span>{item}</span>
            </div>
        )
    })

    const brandsFilter = brandsArr.map((item, index) => {
        return (
            <div className='Filter-checkbox' key={index}>
                <input type='checkbox' value={item} area='brand'/>
                <span>{item}</span>
            </div>
        )
    })

    const pricesFilter = pricesArr.reverse().map((item, index) => {
        return (
            <div className='Filter-checkbox' key={index}>
                <input type='checkbox' value={item} area='price'/>
                <span>{item}</span>
            </div>
        )
    })

    return (
        <section className="Women-Page-Banner">
            <div className='Women-Page-Banner-bord'>
                <div className='Main-Info'>
                    <div className="Women-Page-Banner-Top">
                        <div>
                            <span>Home</span>
                            <span>►</span>
                            <span>{
                                props.gender === 'women' 
                                ? `Women`
                                : `Men`
                            }</span>
                        </div>
                        <div>
                            <img src={share} alt='share' />
                            <span>Share</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Women-Page-Banner-bord-bottom'>
                <div className='Women-Page-Banner-name'>
                    <span>
                        {
                            props.gender === 'women' 
                            ? `WOMEN'S`
                            : `MEN'S`
                        }
                    </span>
                </div>
            </div>
            <div className='Filter'>
                <div className='Main-Info'>
                    <div className='Filter-content'>
                        <div onClick={cbShowFilter}>
                            <img src={filter} alt='filter' />
                            <span>Filter</span>
                        </div>
                        <div>
                            <img src={sort} alt='sort' />
                            <img src={view} alt='view' />
                        </div>
                    </div>
                </div>
            </div>
            {
                showFilter &&
                <div className='Filter-field'>
                    <div className='Main-Info'>
                        <div className='Filter-field-content' onChange={cbFilterChange}>
                            <div className='Filter-field-content-colors Overflow-scroll'>
                                <div className='Filter-name'>COLOR</div>
                                {colorsFilter}
                            </div>
                            <div className='Filter-field-content-sizes Overflow-scroll'>
                                <div className='Filter-name'>SIZES</div>
                                {sizesFilter}
                            </div>
                            <div className='Filter-field-content-brands Overflow-scroll'>
                                <div className='Filter-name'>BRANDS</div>
                                {brandsFilter}
                            </div>
                            <div className='Filter-field-content-brands Overflow-scroll'>
                                <div className='Filter-name'>PRICES</div>
                                {pricesFilter}
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </section>
    )
}

export default WomenPageBanner;