import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'
import playStateReducer from './reducers/playstate-reducer';

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer,
    playState: playStateReducer,
})

const store = createStore(
    allReducers, {
        products: [{name: 'iphone'}],
        user: 'Micheal',
        playState: false,
    },
    window.devToolsExtension && window.devToolsExtension()
);

// const updateUserAction = {
//     type: 'updateUser',
//     payload: {
//         user: 'John'
//     }
// };

// const updatePlayStateAction = {
//     type: 'playState',
//     payload: {
//         playing: false
//     }
// };

//store.dispatch(updateUserAction);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
