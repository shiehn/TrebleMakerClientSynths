import reducer from './playstate-reducer';
import { UPDATE_PLAYSTATE, SWITCH_MELODY_PATTERN } from './../actions/playstate-actions'
import expect from 'expect';

describe('playStateReducer', () => {
    it('should return the initial state', () => { 
        expect(reducer(false, {})).toEqual(false);
    });

    it('should return the initial state', () => { 
        expect(reducer(true, {"type": "wrong","payload": "undefined"})).toEqual(true);
    });
    
    it('should return the new state', () => { 
        expect(reducer(true, {"type": UPDATE_PLAYSTATE,"payload": "undefined"})).toEqual(undefined);
    });

    describe('melodyState', () => {
        it('selected next item', () => {
            expect(reducer(true, {
                "type": SWITCH_MELODY_PATTERN, 
                "payload": [{"selected": true}, {"selected": false}]}
            )).toEqual([{"selected": false}, {"selected": true}]);
        });
    });
});