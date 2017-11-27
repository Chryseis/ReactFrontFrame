/**
 * Created by Administrator on 2017/11/27.
 */
import {call, put, takeEvery} from 'redux-saga/effects';
import {demo as Action} from '../constants/actionType';

const actionMap = {
    [Action.FETCH_HEHE]: function *(action) {
        let data = yield call((params) => new Promise((resolve) => setTimeout(() => resolve(params), 1000)), 'hehe');
        yield put({
            type: Action.GET_HEHE,
            word: data
        })
    }
}

function * actionCreator(action) {
    yield actionMap[action.type](action);
}


function * watchFetchData() {
    yield takeEvery([Action.FETCH_HEHE], actionCreator)
}

export {
    watchFetchData
}