import reducer from './synth-hat-reducer';
import * as CONSTS from './../../consts';

describe('hat synth', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.HAT_SYNTH, 
            "payload": {
                "synths": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});