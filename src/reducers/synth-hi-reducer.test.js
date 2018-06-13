import reducer from './synth-hi-reducer';
import * as CONSTS from './../consts';

describe('hi synth', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.HI_SYNTH, 
            "payload": {
                "synths": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});