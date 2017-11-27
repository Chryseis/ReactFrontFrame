/**
 * Created by AllenFeng on 2017/9/13.
 */
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk'
import reducer from '../reducers';
import rootSaga from '../sagas'


const sagaMiddleware = createSagaMiddleware()
export default (function configureStore(initialState) {
    return createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
})();

sagaMiddleware.run(rootSaga);