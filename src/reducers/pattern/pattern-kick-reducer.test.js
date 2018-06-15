import reducer from './pattern-kick-reducer';
import * as CONSTS from './../../consts';

describe('kick pattern', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.KICK_PATTERN, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});