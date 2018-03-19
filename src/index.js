import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

/*
 * Action
 */
const INCREMENT = "INCREMENT";

function increase(diff) {
    return {
        type: INCREMENT, //필수적인 필드이며, action 의 형태를 정의해줍니다.
        addBy: diff
    };
}


/*
 * Reducer
 */
const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default:
            return state;
    }
}


/*
 * Store
 */
const store = createStore(counterReducer);


class App extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {

        let centerStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect:'none',
            userSelect: 'none',
            cursor: 'pointer'
        };

        return (
            <div
                onClick={ this.onClick }
                style={ centerStyle }
            >

                <h1> {this.props.store.getState().value} </h1>
            </div>
        )
    }

    onClick() {
        this.props.store.dispatch(increase(1)); //store.dispatch(ACTION) 상태값을 수정 할 때 사용되는 메소드입니다.
    }
}

const render = () => {

    const appElement = document.getElementById('root');
    ReactDOM.render(
        <App store={store}/>, // store 를 App 컴포넌트의 props 로 전달해주었습니다.
        appElement
    );
};

store.subscribe(render); // dispatch 메소드가 실행되면 리스너 함수가 실행됩니다. 즉, 데이터에 변동이 있을때마다 리렌더링하도록 설정합니다.
render();

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
