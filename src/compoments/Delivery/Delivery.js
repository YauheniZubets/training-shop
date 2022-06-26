import { useState } from 'react';
import axios from 'axios';
import './delivery.css';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const Delivery = (props) => {

    const dispatch = useDispatch();
    // const { delivery } = useSelector(state=>state.deliveryInfo);
    const [checkConfirm, setCheckConfirm] = useState(false);
    const [deliveryPost, setDeliveryPost] = useState({
        'post-office': true,
        'express': false,
        'store': false
    });
    const [listOfCountries, setListOfcountries] = useState([]);
    const [choosedCountry, setCountry] = useState('');
    const [storeAddress, setStoreAddress] = useState('');
    const [listOfStores, setlistOfStories] = useState([]);
    const [rightCity ] = useState(false);

    let countriesList, addressesList;
    
    if (listOfCountries.length > 0) {
        countriesList = listOfCountries.map((item, index) => {
            return <option value={item.name} key={index}>{item.name}</option>
        })
    }

    const cbInputAddress = (ev) => {
        let val = ev.target.value;
        setStoreAddress(val);
        if (val.length >= 3) {
            axios.post('https://training.cleverland.by/shop/search/cities', 
                {
                    "city": `${String(val)}`,
                    "country": `${String(choosedCountry)}`
                }
            )
            .then(res => setlistOfStories(res.data));
        }
    }

    if (listOfStores.length > 0) {
        addressesList = listOfStores.map((item, index) => {
            return <option value={item.city} key={index}>{item.city}</option>
        })
    }
    
    const cbChangeDeliveryOption = (ev) => {
        const name = ev.target.name;
        if (name) {
            switch (name) {
                case 'post-office':
                    setDeliveryPost({
                        'post-office': true,
                        'express': false,
                        'store': false
                    });
                    if (checkConfirm) {
                        setCheckConfirm(false);
                        props.enableBut(false)
                    } 
                    break;
                case 'express':
                    setDeliveryPost({
                        'post-office': false,
                        'express': true,
                        'store': false
                    });
                    if (checkConfirm) {
                        setCheckConfirm(false);
                        props.enableBut(false)
                    } 
                    break;
                case 'store':
                    axios.get('https://training.cleverland.by/shop/countries')
                    .then(res=>setListOfcountries(res.data))
                    .catch(err=>console.log(err));
                    setDeliveryPost({
                        'post-office': false,
                        'express': false,
                        'store': true
                    });
                    if (checkConfirm) {
                        setCheckConfirm(false);
                        props.enableBut(false)
                    } 
                    break;
                default:
                    break;
            }
        }
    }

    const validationSchema = yup.object().shape({
        telephone: yup.string().matches(/(?:\+|\d)[\d\-\(\) ]{9,}\d/g).typeError('Номер телефона').required(),
        email: yup.string().email('Must be a valid email').max(255),
        country: yup.string(),
        city: yup.string(),
        street: yup.string(),
        house: yup.string(),
        apartment: yup.string(),
        postCode: yup.string()
    })

    const cbValidateAndToRedux = (res) => {
        // const checkForEmpty = (obj) => {
        //     let emptyFlag = true;
        //     for (const key in obj) {
        //         if(obj[key].length === 0) {
        //             emptyFlag = false;
        //             break;
        //         } 
        //     }
        //     return emptyFlag;
        // }
        if (deliveryPost['post-office']) {
            let copy = {...res, deliveryMethod: 'pickup from post offices'};
            if (
                res['telephone'] && res['email'] && res['country'] && res['city'] &&
                res['street'] && res['house'] && res['postCode']
            ) {
                props.enableBut(true);
                dispatch({
                    type:'ADD_DEL_INFO',
                    infoData: copy
                });
            } else {
                props.enableBut(false);
            }
        }
        if (deliveryPost['express']) {
            res['postCode'] = '';
            let copy = {...res, deliveryMethod: 'express delivery'};
            if (
                res['telephone'] && res['email'] && res['country'] && res['city'] &&
                res['street'] && res['house']
            ) {
                props.enableBut(true);
                dispatch({
                    type:'ADD_DEL_INFO',
                    infoData: copy
                });
            }
        }
        if (deliveryPost['store']) {
            res['postCode'] = '';
            res['street'] = '';
            res['house'] = '';
            res['apartment'] = '';
            let copy = {...res, deliveryMethod: 'store pickup'};
            if (res['telephone'] && res['email'] && res['country'] && res['city']) {
                props.enableBut(copy);
                dispatch({
                    type:'ADD_DEL_INFO',
                    infoData: copy
                });
            }
        }
    }

    return (
        <Formik
            initialValues={{
                telephone: '',
                email: '',
                country: 'BELARUS',
                city: '',
                street: '',
                house: '',
                apartment: '',
                postCode: 'BY ' // express
            }}
            validationSchema = {validationSchema}
            validateOnChange
        >
            {({values, handleChange, validateForm, errors}) => {
                return (
                    <Form className='Delivery-info'>
                        <div className='Delivery-info-choose'>Choose the method of delivery of the items</div>
                        <div className='Delivery-info-choose-check'>
                            <div className='Delivery-info-line'></div>
                            <div className='Delivery-info-check'>
                                <input type='radio' name='post-office' checked={deliveryPost['post-office']} onChange={cbChangeDeliveryOption}/>
                                <label htmlFor='post-office'>Pickup from post offices</label>
                            </div>
                            <div className='Delivery-info-line'></div>
                            <div className='Delivery-info-check'>
                                <input type='radio' name='express' checked={deliveryPost['express']} onChange={cbChangeDeliveryOption}/>
                                <label htmlFor='post-office'>Express delivery</label>
                            </div>
                            <div className='Delivery-info-line'></div>
                            <div className='Delivery-info-check'>
                                <input type='radio' name='store' checked={deliveryPost['store']} onChange={cbChangeDeliveryOption}/>
                                <label htmlFor='store'>Store pickup</label>
                            </div>
                            <div className='Delivery-info-line'></div>
                        </div>
                        <div className='Delivery-info-data'>
                            <div>PHONE</div>
                            <input type='tel' placeholder='+375  (__) _______'  
                                value={values.telephone}
                                onChange={handleChange}
                                name = 'telephone'
                            />
                            {errors.telephone && <p className='Review-error'>{errors.telephone}</p>}
                        </div>
                        <div className='Delivery-info-data'>
                            <div>EMAIL</div>
                            <Field type='email' placeholder='email' 
                                value={values.email}
                                onChange={handleChange}
                                name = 'email'
                            />
                            {errors.email && <p className='Review-error'>{errors.email}</p>}
                        </div>
                        
                        {
                            deliveryPost['store'] 
                            ?
                            <div className='Delivery-info-data'>
                                <div>ADDRESS OF STORE</div>
                                <select defaultValue='Country' size="1"  
                                    onChange={(ev)=>setCountry(ev.target.value)}
                                    onBlur={handleChange}
                                    name='country'
                                >
                                    <option disabled value='Country'>Country</option>
                                    {countriesList}
                                </select>
                                <div className='Delivery-info-data-store'>
                                    <input type='text' disabled={false} 
                                        placeholder='Store address' 
                                        onChange={cbInputAddress}
                                        value={storeAddress}
                                        list='addresses'
                                        onBlur={handleChange}
                                        name='city'
                                    ></input>
                                    {rightCity && <p className='Review-error'>Invalid city</p>}
                                    <datalist id='addresses'>
                                        {addressesList}
                                    </datalist>
                                </div>
                            </div>
                            :
                            <div className='Delivery-info-data'>
                                <div>ADDRESS</div>
                                <Field type='text' value={values.country} onChange={handleChange} name = 'country' />
                                {errors.country && <p className='Review-error'>{errors.country}</p>}
                                <Field type='text' placeholder='City' value={values.city} onChange={handleChange} name = 'city'/>
                                {errors.city && <p className='Review-error'>{errors.city}</p>}
                                <Field type='text' placeholder='Street' value={values.street} onChange={handleChange} name = 'street' />
                                {errors.street && <p className='Review-error'>{errors.street}</p>}
                                <Field type='text' placeholder='House' id='Delivery-info-data-house' value={values.house} onChange={handleChange} name = 'house' />
                                {errors.house && <p className='Review-error'>{errors.house}</p>}
                                <Field type='text' placeholder='Apartment' id='Delivery-info-data-apt' value={values.apartment} onChange={handleChange} name = 'apartment' />
                                {errors.apartment && <p className='Review-error'>{errors.apartment}</p>}
                            </div>
                        }
                        {
                            deliveryPost['post-office'] &&
                            <div className='Delivery-info-data'>
                                <div>POSTCODE</div>
                                <input type='text' name='postCode' placeholder='BY_ _ _ _' value={values.postCode} onChange={handleChange} />
                            </div>
                        }
                        <div className='Delivery-info-check'>
                            <div>
                                <input 
                                    type='checkbox' name='agree'
                                    checked={checkConfirm}
                                    onChange={(ev) => {
                                        setCheckConfirm(!checkConfirm);
                                        let check = ev.target;
                                        check.checked && validateForm()
                                        .then(()=>cbValidateAndToRedux(values))
                                        .catch(err => console.log(err))
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor='agree'>I agree to the processing of my personal information</label>
                            </div>
                        </div>
                    </Form>
                )
            }}
        </Formik>
        
    )
}

export default Delivery;