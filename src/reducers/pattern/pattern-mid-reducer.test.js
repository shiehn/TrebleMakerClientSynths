import reducer from './pattern-mid-reducer';
import * as CONSTS from './../../consts';

describe('mid pattern', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.MID_PATTERN, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});