import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import combinedReducer from './reducers';
import { watchAxiosProds } from './sagas';
import { watchSendFullOrder } from './confirmOrderSaga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(combinedReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
    yield all([watchAxiosProds(), watchSendFullOrder()])
}

sagaMiddleware.run(rootSaga);
// sagaMiddleware.run(watchSendFullOrder);

export default store;