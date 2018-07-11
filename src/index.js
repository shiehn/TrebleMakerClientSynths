import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import playStateReducer from './reducers/playstate-reducer';

import patternMelodyReducer  from './reducers/pattern/pattern-melody-reducer';
import patternHiReducer  from './reducers/pattern/pattern-hi-reducer';
import patternMidReducer  from './reducers/pattern/pattern-mid-reducer';
import patternLowReducer  from './reducers/pattern/pattern-low-reducer';
import patternKickReducer  from './reducers/pattern/pattern-kick-reducer';
import patternSnareReducer  from './reducers/pattern/pattern-snare-reducer';
import patternHatReducer  from './reducers/pattern/pattern-hat-reducer';

import synthMelodyReducer  from './reducers/synth/synth-melody-reducer';
import synthHiReducer  from './reducers/synth/synth-hi-reducer';
import synthMidReducer  from './reducers/synth/synth-mid-reducer';
import synthLowReducer  from './reducers/synth/synth-low-reducer';
import synthKickReducer  from './reducers/synth/synth-kick-reducer';
import synthSnareReducer  from './reducers/synth/synth-snare-reducer';
import synthHatReducer  from './reducers/synth/synth-hat-reducer';

import fxMelodyReducer from './reducers/fx/fx-melody-reducer';
import fxHiReducer from './reducers/fx/fx-hi-reducer';
import fxMidReducer from './reducers/fx/fx-mid-reducer';
import fxLowReducer from './reducers/fx/fx-low-reducer';
import fxKickReducer from './reducers/fx/fx-kick-reducer';
import fxSnareReducer from './reducers/fx/fx-snare-reducer';
import fxHatReducer from './reducers/fx/fx-hat-reducer';
import showVideoReducer from './reducers/showvideo-reducer';
import showLoadingReducer from './reducers/showloading-reducer';

const allReducers = combineReducers({
    playState: playStateReducer,
    showVideo: showVideoReducer,
    showLoading: showLoadingReducer,

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
    
    melodyFx: fxMelodyReducer,
    hiFx: fxHiReducer,
    midFx: fxMidReducer,
    lowFx: fxLowReducer,
    hatFx: fxHatReducer,
    snareFx: fxSnareReducer,
    kickFx: fxKickReducer,
})

const store = createStore(
    allReducers, { 
        playState: false,
        showVideo: false,
        showLoading: true,
        
        melodyPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "a", "selected": false, "color": "##7d42f4"}],
        melodySynths: [{"name": "mel1", "selected": true, "color": "#42f4a7"}, {"name": "mel2", "selected": false, "color": "##7d42f4"}],
        melodyFx: [{"name": "melfx1", "selected": true, "color": "#42f4a7"}, {"name": "melfx2", "selected": false, "color": "##7d42f4"}],
        
        hiPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "a", "selected": false, "color": "##7d42f4"}],
        hiSynths: [{"name": "hi1", "selected": true, "color": "#42f4a7"}, {"name": "hi2", "selected": false, "color": "##7d42f4"}],
        hiFx: [{"name": "hifx1", "selected": true, "color": "#42f4a7"}, {"name": "hifx2", "selected": false, "color": "##7d42f4"}],
        
        midPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "a", "selected": false, "color": "##7d42f4"}],
        midSynths: [{"name": "mid1", "selected": true, "color": "#42f4a7"}, {"name": "mid2", "selected": false, "color": "##7d42f4"}],
        midFx: [{"name": "midfx1", "selected": true, "color": "#42f4a7"}, {"name": "midfx2", "selected": false, "color": "##7d42f4"}],
    
        lowPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "a", "selected": false, "color": "##7d42f4"}],
        lowSynths: [{"name": "low1", "selected": true, "color": "#42f4a7"}, {"name": "low2", "selected": false, "color": "##7d42f4"}],
        lowFx: [{"name": "lowfx1", "selected": true, "color": "#42f4a7"}, {"name": "lowfx2", "selected": false, "color": "##7d42f4"}],
    
        hatPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "a", "selected": false, "color": "##7d42f4"}],
        hatSynths: [{"name": "hat1", "selected": true, "color": "#42f4a7"}, {"name": "hat2", "selected": false, "color": "##7d42f4"}],
        hatFx:      [{"name": "hatfx1", "selected": true, "color": "#42f4a7"}, {"name": "hatfx2", "selected": false, "color": "##7d42f4"}],
    
        snarePattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "a", "selected": false, "color": "##7d42f4"}],
        snareSynths: [{"name": "snare1", "selected": true, "color": "#42f4a7"}, {"name": "snare2", "selected": false, "color": "##7d42f4"}],
        snareFx:      [{"name": "snarefx1", "selected": true, "color": "#42f4a7"}, {"name": "snarefx2", "selected": false, "color": "##7d42f4"}],

        kickPattern: [{"name": "a", "selected": true, "color": "#42f4a7"}, {"name": "a", "selected": false, "color": "##7d42f4"}],
        kickSynths: [{"name": "kick1", "selected": true, "color": "#42f4a7"}, {"name": "kick2", "selected": false, "color": "##7d42f4"}],
        kickFx:      [{"name": "kickfx1", "selected": true, "color": "#42f4a7"}, {"name": "kickfx2", "selected": false, "color": "##7d42f4"}],
    },
    window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
