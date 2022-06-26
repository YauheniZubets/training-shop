import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BlockMenu from '../clothesBlockMenu/clothesBlockMenu';
import ProductCard from '../ProductCard/ProductCard';
// import { PRODUCTS } from '../products';

import './Womens.css';


const Womens = (props) => {
    const [particular, setParticular] = useState('isNewArrivals');
    const [filteredArray, setFilteredArray] = useState([]);
    const [lastArea, setLastArea] = useState('');

    const {products} = useSelector(state=>state.mainProducts);

    const filterMenu = (value) => setParticular(value);
    let filteredCards = [];

    useEffect(()=>{
        if (props.lastArea) {
            filteredCards = products[props.gender].filter((item, index) => {
                if (props.lastArea.length === 2) { //цвета
                    return item[props.lastArea[0]].some(b=>props.arrayToSort[props.lastArea[0]].includes(b[props.lastArea[1]]));
                } else if (props.lastArea[0] === 'sizes') {
                    return item[props.lastArea[0]].some(b=>props.arrayToSort[props.lastArea[0]].includes(b));
                } else if (props.lastArea[0] === 'brand') {
                    return props.arrayToSort[props.lastArea[0]].some(b=>item[props.lastArea[0]] === b);
                } else {
                    // return props.arrayToSort[props.lastArea[0]].filter(b=>item[props.lastArea[0]] < b);
                }
            })
        setFilteredArray(filteredCards);
        setLastArea(props.lastArea);
        } 
    }, [props.arrayToSort]);

    let productCards = null;

    if (props.showBlockMenu) {
        filteredCards = products[props.gender].filter((item, index) => {
            return item.particulars[particular] === true; 
        })
        productCards = filteredCards.map((item, index) => {
            return (
                <ProductCard 
                    key={index} particulars={item.particulars} name={item.name} category={item.category}
                    brand={item.brand} material={item.material} rating={item.rating} price={item.price}
                    sizes={item.sizes} discont={item.discount} reviews={item.reviews} images={item.images}
                    id={item.id} gender={props.gender}
                />
            )
        })
    } else if (props.lastArea && filteredArray.length !==0) {
        
        productCards = filteredArray.map((item, index) => {
            
            return (
                <ProductCard 
                    key={index} particulars={item.particulars} name={item.name} category={item.category}
                    brand={item.brand} material={item.material} rating={item.rating} price={item.price}
                    sizes={item.sizes} discont={item.discount} reviews={item.reviews} images={item.images}
                    id={item.id} gender={props.gender}
                />
            )
        })
    } else {
        productCards = products[props.gender].map((item, index) => {
            return (
                <ProductCard 
                    key={index} particulars={item.particulars} name={item.name} category={item.category}
                    brand={item.brand} material={item.material} rating={item.rating} price={item.price}
                    sizes={item.sizes} discont={item.discount} reviews={item.reviews} images={item.images}
                    id={item.id} gender={props.gender}
                />
            )
        })
    };
    return (
        <section className='Womens' data-test-id='clothes-women'>
            <div className='Main-Info'>
                {
                    props.showBlockMenu && 
                    <div className='Womens-Header'>
                        <div className='Womens-Name'>
                            <span>{
                                props.gender === 'women' 
                                ? `WOMEN'S`
                                : `MEN'S`
                            }</span>
                        </div>
                        <BlockMenu filterMenu = {filterMenu} gender={props.gender} />
                    </div>
                }
                <div className='Womens-AllCards'>
                    {productCards}
                </div>
            </div>
            {
                props.showBlockMenu &&
                <div className='Womens-See-All'>
                    <span>See All</span>
                </div>
            }
        </section>
    )
}

export default Womens;