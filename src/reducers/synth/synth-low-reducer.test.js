import reducer from './synth-low-reducer';
import * as CONSTS from './../../consts';

describe('low synth', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.LOW_SYNTH, 
            "payload": {
                "synths": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});