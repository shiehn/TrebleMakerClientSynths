import reducer from './synth-melody-reducer';
import * as CONSTS from './../consts';

describe('melody synth', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.MELODY_SYNTH, 
            "payload": {
                "synths": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});