import reducer from './synth-kick-reducer';
import * as CONSTS from './../consts';

describe('kick synth', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.KICK_SYNTH, 
            "payload": {
                "synths": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});