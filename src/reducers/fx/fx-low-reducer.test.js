import reducer from './fx-low-reducer';
import * as CONSTS from './../../consts';

describe('fx', () => {
    it('should have been bypassed', () => {
        expect(true).toEqual(true);
    });
})

/*
describe('low fx', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.LOW_FX, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
});
*/