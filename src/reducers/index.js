import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux'; //combineReducers 는 여러개의 reducer를 한개로 합칠 때 사용 되는 redux 내장 메소드 입니다.

//state
const counterInitialState = {
    value: 0,
    diff: 1
};


//reducer를 여러개로 분리하여 작성 할 땐, 서로 직접적인 관계가 없어야 합니다.
const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const counterApp = combineReducers({
    counter,
    extra
});

// 다음과 코드와 동일합니다
// const counterApp = ( state = { }, action ) => {
//     return {
//         counter: counter(state.counter, action),
//         extra: extra(state.extra, action)
//     }
// }

// 각 reducer에 다른 key를 주고싶다면 다음과 같이 작성하면 됩니다.
// const counterApp = combineReducers({
//     a: counter,
//     b: extra
// });

export default counterApp;