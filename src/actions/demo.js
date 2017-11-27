/**
 * Created by Administrator on 2017/11/9.
 */
import {demo as Action} from '../constants/actionType';


export function getHaha() {
    return {
        type: Action.GET_HAHA,
        word: 'xixi'
    }
}

export function getHehe() {
    return async (dispatch) => {
        let data = await new Promise((resolve) => setTimeout(() => resolve('hehe'), 5000));
        return dispatch({
            type: Action.GET_HEHE,
            word: data
        })
    }
}

export function fetchHeHe() {
    return {
        type: Action.FETCH_HEHE,
        word: 'hehe'
    }
}