import './payment.css';
import payPal from '../cartPageBody/img/paypal.png';
import visa from '../cartPageBody/img/visa.png';
import master from '../cartPageBody/img/mastercard.png';
import eye from './img/eye.svg';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';


const Payment = (props) => {

    const [currentPayment, setPayment] = useState({
        'paypal': false,
        'visa': true,
        'master': false,
        'cash': false
    })
    const [showCVV, toogleCVV] = useState(false);

    const dispatch = useDispatch();
    
    const validationSchemaPay = yup.object({
        email: yup.string().email('Must be a valid').matches(/[a-z0-9]+@[a-z]+\.[a-z]{2}/),
        carddate: yup.string().max(5).min(5).matches(/[0-9]{2}\/[0-9]{2}/),
        cardcvv: yup.string().max(3).min(3).matches(/[0-9]{3}/),
        cardno: yup.string().max(16).min(16)
    })

    const formik = useFormik({
        initialValues: {
            cashEmail: '',
            carddate: '',
            cardcvv: '',
            cardno: '',
            paymentMethod: 'card'
        },
        validationSchema: validationSchemaPay
    })

    const cbValidatePaymentAndToRedux = (ev) => {
        const target = ev.target;
        if (target.checked) {
            if (formik.values.cashEmail || (formik.values.carddate && formik.values.cardcvv && formik.values.cardno)) {
                if (formik.isValid) { 
                    props.enable(true);
                    dispatch({
                        type: 'ADD_PAY_INFO',
                        infoData: formik.values
                    })
                } else  {
                    props.enable(false);
                }
            } else if (currentPayment['cash']) {
                props.enable(true);
                dispatch({
                    type: 'ADD_PAY_INFO',
                    infoData: formik.values
                })
            }
        } else {
            props.enable(false);
        }
    } 
    
    const choosePayment = (ev) => {
        let target = ev.target;
        switch (target.id) {
            case 'paypal':
                setPayment({
                    'paypal': true,
                    'visa': false,
                    'master': false,
                    'cash': false
                });
                formik.values.paymentMethod = 'paypal';
                props.isCash && props.changeBut(false);
                break;
            case 'visa':
                setPayment({
                    'paypal': false,
                    'visa': true,
                    'master': false,
                    'cash': false
                });
                formik.values.paymentMethod = 'card';
                props.isCash && props.changeBut(false);
                break;
            case 'master':
                setPayment({
                    'paypal': false,
                    'visa': false,
                    'master': true,
                    'cash': false
                });
                formik.values.paymentMethod = 'card';
                props.isCash && props.changeBut(false);
                break;
            case 'cash':
                setPayment({
                    'paypal': false,
                    'visa': false,
                    'master': false,
                    'cash': true
                });
                formik.values.paymentMethod = 'cash';
                !props.isCash && props.changeBut(true);
                break;
            default:
                break;
        }
    }

    return (
        <div className='Payment'>
            <div className='Payment-head'>
                Method of payments
            </div>
            <div className='Payment-vars' >
                <div>
                    <input type='radio' id='paypal' 
                        checked={currentPayment['paypal']} 
                        onChange={choosePayment}
                    /> 
                    <img src={payPal} alt='payPl' /> 
                </div>
                <div>
                    <input type='radio' id='visa' 
                        checked={currentPayment['visa']} 
                        onChange={choosePayment}
                    /> 
                    <img src={visa} alt='vi' /> 
                </div>
                <div>
                    <input type='radio' id='master' 
                        checked={currentPayment['master']} 
                        onChange={choosePayment}
                    /> <img src={master} alt='mast' /> 
                </div>
                <div className='Payment-cash'>
                    <input type='radio' id='cash' 
                        checked={currentPayment['cash']} 
                        onChange={choosePayment}    
                    /> 
                    Cash 
                </div>
            </div>
            {
                currentPayment['paypal'] &&
                <div className='Payment-email'>
                    E-mail
                    <input type='text' placeholder='e-mail' name='cashEmail'
                        onChange={formik.handleChange} 
                        className={classNames({'Error-input': formik.errors.cashEmail})}
                    />
                    <div className='Error-div'>
                        {
                            formik.errors.cashEmail && <div>Invalid E-mail</div>
                        }
                    </div>
                </div>
            }
            {
                (currentPayment['visa'] || currentPayment['master']) &&
                <div className='Payment-email'>
                    <div className='Payment-cardno'>
                        CARD
                        <input type='text' placeholder='---- ---- ---- ----' name='cardno'
                            onChange={formik.handleChange}
                            className={classNames({'Error-input': formik.errors.cardno})}
                        />
                        <div className='Error-div'>
                            {
                                formik.errors.cardno && <div>Invalid Card number</div>
                            }
                        </div>
                        
                    </div>
                    
                    <div className='Payment-carddata'>
                        <div>
                            <input type='text' placeholder='MM/VV' name='carddate' 
                                onChange={formik.handleChange}
                                className={classNames({'Error-input': formik.errors.carddate})}
                            />
                            <div className='Error-div'>
                                {
                                    formik.errors.carddate && <div>Invalid date</div>
                                }
                            </div>
                        </div>
                        <div className='Payment-cvv'>
                            <input type={showCVV ? 'text' : 'password'} placeholder='CVV' name='cardcvv' 
                                onChange={formik.handleChange}
                                className={classNames({'Error-input': formik.errors.cardcvv})}
                            />
                            <img src={eye} alt='eye' className='Payment-eye' onClick={()=>toogleCVV(!showCVV)} />
                            <div className='Error-div'>
                                {
                                    formik.errors.cardcvv && <div>Invalid CVV</div>
                                }
                            </div>
                        </div>
                        
                    </div>
                </div>
            }
            <div className='Delivery-info-check'>
                <div>
                    <input 
                        type='checkbox' name='agree'
                        onChange={cbValidatePaymentAndToRedux}
                    />
                </div>
                <div>
                    <label htmlFor='agree'>I agree to the processing of my personal information</label>
                </div>
            </div>
        </div>
    )
}

export default Payment;