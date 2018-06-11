import reducer from './playstate-reducer';
import { UPDATE_PLAYSTATE } from './../actions/playstate-actions'
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
});