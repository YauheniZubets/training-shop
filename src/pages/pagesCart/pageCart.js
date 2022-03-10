import { useLocation, useParams } from 'react-router-dom';
import { PRODUCTS } from '../../compoments/products';
import './pageCart.css';
import CartPageBanner from '../../compoments/cartPageBanner/CartPageBanner';
import CartPageBody from '../../compoments/cartPageBody/CartPageBody';


const PageCart = (props) => {

    const params = useParams();
    const loc = useLocation();

    const getId = (params) => {
        if (params) {
            const id = String(params.id);
            return id;
        }
    }

    const getGender = (loc) => {
        if(loc) {
            const url = loc.pathname;
            const gender = url.match(/([a-z]+)/);
            const genderStr = gender[0];
            return genderStr;
        }
    }

    const productCard = PRODUCTS[getGender(loc)].find(item => {
        return item.id===getId(params);
    });

    return (<div data-test-id='products-page-women'>
                <CartPageBanner product={productCard}  />
                <CartPageBody product={productCard} />
            </div>
    )
}

export default PageCart;