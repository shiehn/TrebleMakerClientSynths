import reducer from './fx-kick-reducer';
import * as CONSTS from './../../consts';

describe('kick fx', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.KICK_FX, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});