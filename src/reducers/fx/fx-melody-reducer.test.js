import reducer from './fx-melody-reducer';
import * as CONSTS from './../../consts';

describe('melodyFxState', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.MELODY_FX, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});