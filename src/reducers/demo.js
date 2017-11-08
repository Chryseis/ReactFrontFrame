/**
 * Created by Administrator on 2017/11/9.
 */
import {demo as Action} from '../constants/actionType';


const initialState = {
    test: 'haha'
}

const reducersMap = {
    [Action.GET_HAHA]: (state, action) => {
        return {
            test: action.word
        }
    },
    [Action.GET_HEHE]: (state, action) => {
        return {
            test: action.word
        }
    }
}


export default function demo(state = initialState, action) {
    const reduceFn = reducersMap[action.type];
    if (!reduceFn) {
        return state;
    }
    return Object.assign({}, state, reduceFn(state, action))
}