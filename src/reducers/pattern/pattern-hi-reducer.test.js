import reducer from './pattern-hi-reducer';
import * as CONSTS from './../../consts';

describe('hi pattern', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.HI_PATTERN, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});