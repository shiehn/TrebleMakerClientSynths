import reducer from './synth-snare-reducer';
import * as CONSTS from './../consts';

describe('snare synth', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.SNARE_SYNTH, 
            "payload": {
                "synths": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});