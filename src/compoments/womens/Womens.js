import React from 'react';

import BlockMenu from '../clothesBlockMenu/clothesBlockMenu';
import ProductCard from '../ProductCard/ProductCard';
import { PRODUCTS } from '../products';

import './Womens.css';


class Womens extends React.PureComponent  {
    constructor (props){
        super();
    }

    state = {
        particular: 'isNewArrivals',
        filteredArray: []
    };
    // const [particular, setParticular] = useState('isNewArrivals');
    // const [filtered, setFiltered] = useState(PRODUCTS[props.gender]);
    

    filterMenu = (value) => {
        this.setState({particular: value});
    }

    

    render () {

        let filteredCards = null;
        let productCards = null;

        //console.log('props tosort', props.toSort);
        if (this.props.showBlockMenu) {
            filteredCards = PRODUCTS[this.props.gender].filter((item, index) => {
                // console.log(item.particulars[particular]);
                return item.particulars[this.state.particular] === true; 
            })
            productCards = filteredCards.map((item, index) => {
                return (
                    <ProductCard 
                        key={index} particulars={item.particulars} name={item.name} category={item.category}
                        brand={item.brand} material={item.material} rating={item.rating} price={item.price}
                        sizes={item.sizes} discont={item.discount} reviews={item.reviews} images={item.images}
                        id={item.id} gender={this.props.gender}
                    />
                )
            })
        } else if (this.props.images.length || this.props.sizes.length || this.props.brand.length) {
            filteredCards = PRODUCTS[this.props.gender].filter((item, index) => {
                return ()=>{
                    switch (this.props.area) {
                    case 'images':
                        for (const i of item[this.props.area]) {
                            for (const j of this.props.images) {
                                if (i.color.includes(j)) return item;
                            }
                        }
                        break;
                    case 'sizes':
                        for (const i of item[this.props.area]) {
                            for (const j of this.props.sizes) {
                                if (i.includes(j)) return item;
                            }
                        }
                        break;
                    case 'brand':
                        for (const j of this.props.brand) {
                            if (j === item.brand) return item;
                        }
                        break;
                    case 'price':
                        for (const j of this.props.price) {
                            if (j > item.price[0] && j < item.price[1]) return item;
                        }
                        break;
                
                    default:
                        break;
                }
                }
                
            })
            productCards = filteredCards.map((item, index) => {
                return (
                    <ProductCard 
                        key={index} particulars={item.particulars} name={item.name} category={item.category}
                        brand={item.brand} material={item.material} rating={item.rating} price={item.price}
                        sizes={item.sizes} discont={item.discount} reviews={item.reviews} images={item.images}
                        id={item.id} gender={this.props.gender}
                    />
                )
            })
            
        } else {
            productCards = PRODUCTS[this.props.gender].map((item, index) => {
                return (
                    <ProductCard 
                        key={index} particulars={item.particulars} name={item.name} category={item.category}
                        brand={item.brand} material={item.material} rating={item.rating} price={item.price}
                        sizes={item.sizes} discont={item.discount} reviews={item.reviews} images={item.images}
                        id={item.id} gender={this.props.gender}
                    />
                )
            })
        };


        return (
        <section className='Womens' data-test-id='clothes-women'>
            <div className='Main-Info'>
                {
                    this.props.showBlockMenu && 
                    <div className='Womens-Header'>
                        <div className='Womens-Name'>
                            <span>{
                                this.props.gender === 'women' 
                                ? `WOMEN'S`
                                : `MEN'S`
                            }</span>
                        </div>
                        <BlockMenu filterMenu = {this.props.filterMenu} gender={this.props.gender} />
                    </div>
                }
                <div className='Womens-AllCards'>
                    {productCards}
                </div>
            </div>
            <div className='Womens-See-All'>
                <span>See All</span>
            </div>
        </section>
    )
    }
    
}

export default Womens;