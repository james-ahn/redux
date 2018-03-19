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













Reference
https://velopert.com/
