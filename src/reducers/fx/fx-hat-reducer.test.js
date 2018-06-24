import reducer from './fx-hat-reducer';
import * as CONSTS from './../../consts';

describe('melodyFxState', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.HAT_FX, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});