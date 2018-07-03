import SynthFxUtils from './synth-fx-utils';

describe('SynthFxUtils', () => {
    it('should return the correct milliSeconds for quarters', () => {
        expect(SynthFxUtils.getQuaterNote(100)).toEqual(600);
    });

    it('should return the correct milliSeconds for eigths', () => { 
        expect(SynthFxUtils.getEightNote(100)).toEqual(300);
    });

    it('should return the correct milliSeconds for sixteenths', () => { 
        expect(SynthFxUtils.getSixteenthNote(100)).toEqual(150);
    });

    it('should return the correct milliSeconds for triplets', () => {
        expect(SynthFxUtils.getTripletEighth(100)).toEqual(400);
    });
});