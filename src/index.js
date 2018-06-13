import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import playStateReducer from './reducers/playstate-reducer';

import patternMelodyReducer  from './reducers/pattern-melody-reducer';
import patternHiReducer  from './reducers/pattern-hi-reducer';
import patternMidReducer  from './reducers/pattern-mid-reducer';
import patternLowReducer  from './reducers/pattern-low-reducer';
import patternKickReducer  from './reducers/pattern-kick-reducer';
import patternSnareReducer  from './reducers/pattern-snare-reducer';
import patternHatReducer  from './reducers/pattern-hat-reducer';

import synthMelodyReducer  from './reducers/synth-melody-reducer';
import synthHiReducer  from './reducers/synth-hi-reducer';
import synthMidReducer  from './reducers/synth-mid-reducer';
import synthLowReducer  from './reducers/synth-low-reducer';
import synthKickReducer  from './reducers/synth-kick-reducer';
import synthSnareReducer  from './reducers/synth-snare-reducer';
import synthHatReducer  from './reducers/synth-hat-reducer';

const allReducers = combineReducers({
    playState: playStateReducer,
    melodyPattern: patternMelodyReducer,
    hiPattern: patternHiReducer,
    midPattern: patternMidReducer,
    lowPattern: patternLowReducer,
    hatPattern: patternHatReducer,
    snarePattern: patternSnareReducer,
    kickPattern: patternKickReducer,

    melodySynths: synthMelodyReducer,
    hiSynths: synthHiReducer,
    midSynths: synthMidReducer,
    lowSynths: synthLowReducer,
    hatSynths: synthHatReducer,
    snareSynths: synthSnareReducer,
    kickSynths: synthKickReducer,
})

const store = createStore(
    allReducers, { 
        playState: false,
        
        melodyPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        melodySynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        // melodyFX: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        
        hiPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        hiSynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        // hiFX: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        
        midPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        midSynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        // midFX: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
    
        lowPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        lowSynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        // lowFX: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
    
        hatPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        hatSynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        // hatFX:      [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
    
        snarePattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        snareSynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        // snareFX:      [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],

        kickPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        kickSynths: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
        // kickFX:      [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "b", "selected": false, "color": "##7d42f4"}],
    },
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
