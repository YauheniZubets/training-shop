import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import women1 from './img/women1.png';
import Stars from '../stars/stars';

const ProductCard = (props) => {

    const discontNumeric = () => {
        let discontNumeric = null
        if (props.discont) discontNumeric = Number(props.discont.substring(1, 3));
        return discontNumeric;
    }

    const productImage = () => {
        const imageDefault = props.images[0].url;
        return imageDefault;
    }

    return (
        <div className='Womens-Card'>
            <Link to={`/${props.gender}/${props.id}`} data-test-id='clothes-card-women'>
                <div className='Womens-Card-Image' style={{
                        background:`url('https://training.cleverland.by/shop${productImage()}') center / contain no-repeat `,
                        
                    }}>
                    {
                        props.discont &&
                        <div className='Womens-Card-Discount'>
                            <span className='Womens-Card-DiscountText'>{props.discont}</span>
                        </div>
                    }
                </div>
                <div className='Womens-Card-Descr'>
                    <div className='Womens-Card-Name'>
                        <span>{props.name}</span>
                    </div>
                    <div className='Womens-Card-Price'>
                        <span>$ {props.price} </span>
                        {
                            props.discont &&
                            <span className='Womens-Card-Price-Disc'>$ {Number(props.price)*1+discontNumeric()}</span>
                        }
                    </div>
                    <Stars number={props.rating} />
                </div>
            </Link>
        </div>
    )
}

ProductCard.propTypes = {
    name: PropTypes.string
}

export default ProductCard;