import './pageCart.css';
import CartPageBanner from '../../compoments/cartPageBanner/CartPageBanner';
import CartPageBody from '../../compoments/cartPageBody/CartPageBody';

const PageCart = () => {
    return (<div data-test-id='products-page-women'>
                <CartPageBanner />
                <CartPageBody />
            </div>
        
    )
}

export default PageCart;