import reducer from './pattern-low-reducer';
import * as CONSTS from './../../consts';

describe('low pattern', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.LOW_PATTERN, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});