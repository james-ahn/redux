# redux
It's for studying redux

## Flux pattern
```
Action -> Dispatcher -> Store -> View
             ^                    |
             |                    |
             ---------Action------- 
```             

## Three rules 

1. use only one store (Single Source of Truth)
   * but there are many stores in Flux pattern. 

2. State is read-only
3. Changes are made with Pure Functions (Reducer)
Action : object
Reducer: function 
```
Action[
  Reducer(){}
  Reducer(){}
]
```

> Reducer point
- 외부 네트워크 혹은 데이터베이스에 접근하지 않아야한다.
- return 값은 오직 parameter 값에만 의존되어야한다.
- 인수는 변경되지 않아야한다.
- 같은 인수로 실행된 함수는 언제나 같은 결과를 반환해야한다.
- 순수하지 않은 API 호출을 하지 말아야 한다. (Date 및 Math 의 함수 등)


## set the react environment 
```
sudo npm install -g create-react-app
create-react-app my-app

- for customizing
npm run eject (node_modules/react-scripts => root)
```


## install dependency modules for redux
```
npm install --save redux react-redux
``` 

## make new project
mkdir actions components reducers && touch actions/index.js components/App.js components/Buttons.js components/Counter.js components/Option.js reducers/index.js

````
src
├── actions
│        └── index.js
├── components
│        ├── App.js
│        ├── Buttons.js
│        ├── Counter.js
│        └── Option.js
├── index.js
└── reducers
    └── index.js
````


## conect API

connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

connect는 react-redux 의 내장 API 입니다. 이 함수는 React Component 를 Redux Store에  ‘연결’ 해줍니다.

이 함수의 리턴값은 특정 컴포넌트 클래스의 props 를 store의 데이터에 연결시켜주는 또 다른 함수를 리턴합니다.

리턴된 함수에 컴포넌트를 인수로 넣어 실행하면, 기존 컴포넌트를 수정하는게 아니라 새로운 컴포넌트를 return 합니다.

인수:

mapStateToProps(state, [ownProps]): (Function) store 의 state 를 컴포넌트의 props 에 매핑 시켜줍니다. ownProps 인수가 명시될 경우, 이를 통해 함수 내부에서 컴포넌트의 props 값에 접근 할 수 있습니다.

mapDispatchToProps(dispatch, [ownProps]): (Function or Object)  컴포넌트의 특정 함수형 props 를 실행 했을 때, 개발자가 지정한 action을 dispatch 하도록 설정합니다. ownProps의 용도는 위 인수와 동일합니다.

mapDispatchToProps 를 객체형으로 전달하는 방법 및 기타 인수들은 매뉴얼을 참조해주세요.










Reference
https://velopert.com/
