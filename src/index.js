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
        
        melodyNotes: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        melodySynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        melodyFX: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        
        hiNotes: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        hiSynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        hiFX: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        
        midNotes: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        midSynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        midFX: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
    
        lowNotes: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        lowSynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        lowFX: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
    
        hatPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        hatSamples: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        hatFX:      [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
    
        snarePattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        snareSamples: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        snareFX:      [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],

        kickPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        kickSamples: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        kickFX:      [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
    },
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
