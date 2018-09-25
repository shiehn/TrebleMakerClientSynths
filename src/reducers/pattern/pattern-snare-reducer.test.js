import reducer from './pattern-snare-reducer';
import * as CONSTS from './../../consts';

describe('snare pattern', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.SNARE_PATTERN, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});