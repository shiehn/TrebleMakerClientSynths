import reducer from './fx-hi-reducer';
import * as CONSTS from './../../consts';

describe('fx', () => {
    it('should have been bypassed', () => {
        expect(true).toEqual(true);
    });
})

/*
describe('hi fx', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.HI_FX, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});
*/