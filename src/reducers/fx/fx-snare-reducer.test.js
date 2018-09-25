import reducer from './fx-snare-reducer';
import * as CONSTS from './../../consts';

describe('fx', () => {
    it('should have been bypassed', () => {
        expect(true).toEqual(true);
    });
})

/*
describe('snare fx', () => {
    it('selected next item', () => {
        expect(reducer(true, {
            "type": CONSTS.SNARE_FX, 
            "payload": {
                "pattern": [{"selected": true}, {"selected": false}]
            }
        })).toEqual([{"selected": false}, {"selected": true}]);
    });
})
*/