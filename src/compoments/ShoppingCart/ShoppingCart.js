import classNames from 'classnames';
import './ShoppingCart.css';

import closeBut from './img/closebut.svg';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { axiosFullStart } from '../../redux/confirmOrderSaga';

import ProductInCart from '../ProductInCart/ProductInCart';
import Delivery from '../Delivery/Delivery';
import Payment from '../Payment/Payment';


const ShoppingCart = (props) => {
    
    let totalSum = 0;
    const [enableFurther, setFurther] = useState(false);
    const [cash, setCash] = useState(false);

    const [isEmpty, setEmpty] = useState(false); //when false - cart is empty
   
    const [delivAndPayment, setdelivAndPayment] = useState({
        'itemsInCart': true,
        'deliveryData': false,
        'payment': false
    });

    useEffect(() => {
        props.prods.prods.length ? setEmpty(true) : setEmpty(false);
    }, [props.prods.prods]);
    useEffect(() => {
        props.fullOrder.success 
        ? setdelivAndPayment({
            'itemsInCart': false,
            'deliveryData': false,
            'payment': false
        })
        : setdelivAndPayment({
            'itemsInCart': true,
            'deliveryData': false,
            'payment': false
        })
        props.fullOrder.success && setEmpty(false);
        props.fullOrder.success && props.dispatch({
            type: "DEL_ALL_PRODS"
        });
    }, [props.fullOrder.success]);


    const cbCloseshoppingCart = () => {
        props.isClosed();
        props.fullOrder.success && props.dispatch({
            type: 'CLEAR_SUCCESS_STATUS'
        });
    }

    const cbValidate = () => {
        if (props.fullOrder.success) {
            cbCloseshoppingCart();
            return 
        }
        if (isEmpty) {
           if (delivAndPayment['itemsInCart']) {
                setdelivAndPayment({
                    'itemsInCart': false,
                    'deliveryData': true,
                    'payment': false
                });
                setFurther(true);
            }
            if (delivAndPayment['deliveryData']) {
                setdelivAndPayment({
                    'itemsInCart': false,
                    'deliveryData': false,
                    'payment': true
                });
                setFurther(true);
            }
            if (delivAndPayment['payment']) {
                const productsToBuy = props.prods;
                const modifiedProds = productsToBuy.prods.map((item, index) => {
                    return {
                        "name": item.name,
                        "size": item.size,
                        "color": item.color,
                        "quantity": String(item.quantity)
                    }
                })
                const allDelivPayData = {
                    "products": modifiedProds,
                    "deliveryMethod": props.deliv.delivery.deliveryMethod,
                    "paymentMethod": props.deliv.payment.paymentMethod,
                    "totalPrice": String(totalSum),
                    "phone": props.deliv.delivery.telephone,
                    "email": props.deliv.delivery.email,
                    "country": props.deliv.delivery.country,
                    "cashEmail": props.deliv.payment.cashEmail,
                    "city": props.deliv.delivery.city,
                    "street": props.deliv.delivery.street,
                    "house": props.deliv.delivery.house,
                    "apartment": props.deliv.delivery.apartment,
                    "postcode": props.deliv.delivery.postCode,
                    "storeAddress": "store address",
                    "card": props.deliv.payment.cardno,
                    "cardDate": props.deliv.payment.carddate,
                    "cardCVV": props.deliv.payment.cardcvv
                }
                props.dispatch(axiosFullStart(allDelivPayData));
            } 
        } else {
            cbCloseshoppingCart();
        }
    }

    const cbChangeFurtherBut = (checked) => {
        setFurther(!checked);
    }

    const cbChangeToReady = (bool) => {
        setCash(bool);
    }
    let prodsArray;
    if (props.prods.prods) prodsArray = props.prods.prods;
    let prodsInShoppingCart = prodsArray.map((item, index) => {
        let curColorName = item.color;
        totalSum += (item.product.price * item.quantity);
        let curColorArr = item.product.images.find(i => i.color === curColorName);
        let curColorUrl = curColorArr.url;
        return <ProductInCart key={index} curColorUrl={curColorUrl} name={item.product.name}
                color={curColorName} size={item.size} quan={item.quantity} price={item.product.price} />
    });

    return (
        <section className={classNames("ShoppingCart", {'ShoppingCart-Visible':props.isOpen}) }>
            <div className='ShoppingCart-Cart'>
                <div className='ShoppingCart-Cart-Header'>
                    <div className='ShoppingCart-Cart-Header-Name'>
                        <span>Shopping Cart</span>
                    </div>
                    <div onClick={cbCloseshoppingCart}>
                        <img src={closeBut} alt='closebut'/>
                    </div>
                </div>
                <div className='ShoppingCart-Cart-Header-Content'>
                    <div className='ShoppingCart-Cart-Header-ContentName'>
                        {
                            isEmpty &&
                            <>
                                <span className={classNames('ShoppingCart-Light', {'ShoppingCart-Dark':delivAndPayment['itemsInCart']})}>Item in Cart</span> / 
                                <span className={classNames('ShoppingCart-Light', {'ShoppingCart-Dark':delivAndPayment['deliveryData']})}> Delivery Info</span> /
                                <span className={classNames('ShoppingCart-Light', {'ShoppingCart-Dark':delivAndPayment['payment']})}> Payment</span>
                            </>
                        }
                    </div>
                    <div className={classNames('ShoppingCart-Cart-Header-ContentMain', {'ShoppingCart-Cart-Header-ContentMain-Center': !isEmpty})}>
                        {
                            props.prods.prods.length === 0 && !props.fullOrder.success &&
                            <div className='Cart-IsEmpty'>
                                Sorry,<br/>your cart<br/>is empty
                            </div>
                        }
                        {
                            delivAndPayment['itemsInCart'] &&
                            prodsInShoppingCart
                        }
                        {
                            delivAndPayment['deliveryData'] &&
                            <Delivery enableBut={cbChangeFurtherBut}  />
                        }
                        {
                            delivAndPayment['payment'] &&
                            <Payment changeBut={cbChangeToReady} isCash={cash} enable={cbChangeFurtherBut} />
                        } 
                        {
                            props.fullOrder.success &&
                            <div className='Cart-result'>
                                <div className='Cart-result-inner'>
                                    Thank you for yor order
                                </div>
                                <div className='Cart-result-add'>
                                    Information about your order will appear in your e-mail.
                                </div>
                                <div className='Cart-result-add'>
                                    Our manager will call you back.
                                </div>
                            </div>
                        }
                        {
                            props.fullOrder.isError &&
                            <div>
                                <div className='Cart-IsEmpty'>
                                    Sorry, your payment has not been processed.
                                </div>
                                <div className='Cart-result-inner'>
                                    {props.fullOrder.isError}
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='ShoppingCart-Cart-Footer'>
                    {
                        isEmpty &&
                        <div className='ShoppingCart-Cart-FooterTotal'>
                            <div>Total</div>
                            <div>${totalSum.toFixed(2)}</div>
                        </div>
                    }
                    
                    <div className={classNames('ShoppingCart-Cart-FooterFurther', {'ShoppingCart-Cart-disabled': enableFurther})} >
                        {
                            delivAndPayment['payment']
                            ?
                            <button onClick={cbValidate} disabled={enableFurther}>
                                {cash ? 'READY' : 'CHECK OUT'}
                            </button>
                            :
                            <button onClick={cbValidate} disabled={enableFurther}>
                                {isEmpty ? 'FURTHER' : 'BACK TO SHOPPING'}
                            </button>
                        }
                    </div>
                    
                    {/* <div className='ShoppingCart-Cart-FooterView'>
                        <button onClick={cbCloseshoppingCart}>VIEW CART</button>
                    </div> */}
                    
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = function (state) {
    return {
        prods: state.prods,
        deliv: state.deliveryInfo,
        fullOrder: state.fullOrder
    }
}

export default connect(mapStateToProps)(ShoppingCart);