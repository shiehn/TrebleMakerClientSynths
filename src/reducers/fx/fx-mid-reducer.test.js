import reducer from './fx-mid-reducer';
import * as CONSTS from './../../consts';

describe('mid fx', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.MID_FX, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});