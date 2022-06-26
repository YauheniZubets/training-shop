import axios from "axios";
import { call, put, takeEvery} from "redux-saga/effects";

const AXIOSED_FULL_ORDER = 'AXIOSED_FULL_ORDER';
const AXIOS_FULL_ORDER_SUCCESS = 'AXIOS_FULL_ORDER_SUCCESS';
const AXIOS_FULL_ORDER_FAIL = 'AXIOS_FULL_ORDER_FAIL';

function* watchSendFullOrder () {
    yield takeEvery('AXIOS_FULL_STARTED', axiosFullOrder)
}

function* axiosFullOrder (fromComp) {
    try {
        yield put(axiosFullToUrl());
        const data = yield call(() => {
            return axios.post('https://training.cleverland.by/shop/cart', 
                fromComp.order
            )
        })
        yield put(axiosFullOrderSuccess(data));
    } catch (error) {
        yield put(axiosFullFail(error))
    }
}

const axiosFullStart = (deliveryData) => { //export to Component
    return {type: 'AXIOS_FULL_STARTED', order: deliveryData}
}

const axiosFullToUrl = () => {
    return {type: AXIOSED_FULL_ORDER}
}

const axiosFullOrderSuccess = (data) => {
    console.log('data: ', data);
    return {type: AXIOS_FULL_ORDER_SUCCESS, result: data.data.message}
}

const axiosFullFail = (data) => {
    return {type: AXIOS_FULL_ORDER_FAIL, result: data.data.message}
}

export {
    watchSendFullOrder, AXIOSED_FULL_ORDER, AXIOS_FULL_ORDER_SUCCESS, AXIOS_FULL_ORDER_FAIL,
    axiosFullStart, axiosFullToUrl, axiosFullOrderSuccess, axiosFullFail
}

