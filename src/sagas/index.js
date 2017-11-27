/**
 * Created by Administrator on 2017/11/27.
 */
import {all} from 'redux-saga/effects';
import {watchFetchData} from './demo'

export default function* rootSaga() {
    yield all([
        watchFetchData()
    ])
}