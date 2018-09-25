import reducer from './pattern-hat-reducer';
import * as CONSTS from './../../consts';

describe('melodyState', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.HAT_PATTERN, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});