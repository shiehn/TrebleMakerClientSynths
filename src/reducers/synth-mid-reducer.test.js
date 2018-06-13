import reducer from './synth-mid-reducer';
import * as CONSTS from './../consts';

describe('mid synth', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.MID_SYNTH, 
            "payload": {
                "synths": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});