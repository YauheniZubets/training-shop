import {takeEvery, call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

const AXIOSED_TO_URL = 'AXIOSED_TO_URL';
const AXIOS_FAILED = 'AXIOS_FAILED';
const AXIOSED_SUCCEEDED = 'AXIOSED_SUCCEEDED';

const AXIOSED_PRODUCT_TO_URL = 'AXIOSED_PRODUCT_TO_URL';
const AXIOS_PRODUCT_FAILED = 'AXIOS_PRODUCT_FAILED';
const AXIOSED_PRODUCT_SUCCEEDED = 'AXIOSED_PRODUCT_SUCCEEDED';

const AXIOSED_FULL_ORDER = 'AXIOSED_FULL_ORDER';
const AXIOS_FULL_ORDER_SUCCESS = 'AXIOS_FULL_ORDER_SUCCESS';
const AXIOS_FULL_ORDER_FAIL = 'AXIOS_FULL_ORDER_FAIL';

function* watchAxiosProds () {
    yield takeEvery('AXIOS_STARTED', axiosProds);
    yield takeLatest('AXIOS_PRODUCT_STARTED', axiosOneProd);
    yield takeLatest('AXIOS_FULL', axiosFullOrder)
};

function* axiosProds () {
    try {
        yield put(axiosToUrl());
        const data = yield call(() => {
            return axios.get('https://training.cleverland.by/shop/products')
        });
        yield put(axiosSuccess(data.data))
    } catch (error) {
        yield put(axiosError());
    }
}

function* axiosOneProd (action) {
    try {
        yield put(axiosProductToUrl());
        const data = yield call(() => {
            return axios.get(`https://training.cleverland.by/shop/product/${action.id}`)
        });
        yield put (axiosProductSuccess(data.data));
    } catch (error) {
        yield put(axiosProductError());
    }
}

function* axiosFullOrder  () {
    console.log('fromComp: ');
    try {
        yield put(axiosFullToUrl());
        const data = yield call(() => {
            
            return axios.post('https://training.cleverland.by/shop/cart', 
            {
                "products": [
                    {
                        "name": "Такая то майка",
                        "size": "XL",
                        "color": "Black",
                        "quantity": 2
                    }
                ],
                "deliveryMethod": "Pickup from post offices",
                "paymentMethod": "PayPal",
                "totalPrice": "320",
                "phone": "+375298159396",
                "email": "geageagtest@mail.ru",
                "country": "Belarus",
                "cashEmail": "ttttt@mail.ru",
                "city": "Orsha",
                "street": "ул. пушкина дом калатушкина",
                "house": "15",
                "apartment": "2",
                "postcode": "252222",
                "storeAddress": "store address",
                "card": "7825 5258 8588 0000 5255",
                "cardDate": "25/24",
                "cardCVV": "242"
            }
            )
        })
        console.log('data: ', data);
        yield put(axiosFullOrderSuccess(data));
    } catch (error) {
        console.log('error: ', error);
        yield put(axiosFullFail())
    }
}

const axiosStart = () => { //экспорт в App
    return {type: 'AXIOS_STARTED'}
};

const axiosToUrl = () => {
    return {type: AXIOSED_TO_URL}
};

const axiosSuccess = (data) => {
    return {type: AXIOSED_SUCCEEDED, productsFromUrl: data}
};

const axiosError = () => {
    return {type: AXIOS_FAILED}
};

const axiosProductStart = (id) => { //экспорт в PageCart
    return {
        type: 'AXIOS_PRODUCT_STARTED',
        id: id            
    }
};

const axiosProductToUrl = () => {
    return {type: AXIOSED_PRODUCT_TO_URL}
};

const axiosProductSuccess = (data) => {
    return {type: AXIOSED_PRODUCT_SUCCEEDED, productFromUrl: data}
};

const axiosProductError = () => {
    return {type: AXIOS_PRODUCT_FAILED}
};

const axiosReviewSend = () => {
    return {type: 'AXIOS_REVIEW_SEND'}
}

const axiosFullStart = (deliveryData) => { //export to Component
    console.log('deliveryData: ', deliveryData);
    return {type: 'AXIOS_FULL', data: deliveryData}
}

const axiosFullToUrl = () => {
    return {type: AXIOSED_FULL_ORDER}
}

const axiosFullOrderSuccess = (data) => {
    console.log('data: ', data);
    return {type: AXIOS_FULL_ORDER_SUCCESS, result: data}
}

const axiosFullFail = () => {
    return {type: AXIOS_FULL_ORDER_FAIL}
}

export {
    axiosStart, watchAxiosProds, axiosSuccess, axiosToUrl, axiosError,
    AXIOSED_TO_URL, AXIOS_FAILED, AXIOSED_SUCCEEDED,
    axiosProductStart, axiosProductToUrl, axiosProductSuccess, axiosProductError,
    AXIOSED_PRODUCT_TO_URL, AXIOSED_PRODUCT_SUCCEEDED, AXIOS_PRODUCT_FAILED,
    axiosReviewSend,
    AXIOSED_FULL_ORDER, AXIOS_FULL_ORDER_SUCCESS, AXIOS_FULL_ORDER_FAIL,
    axiosFullStart, axiosFullToUrl, axiosFullOrderSuccess, axiosFullFail
};

