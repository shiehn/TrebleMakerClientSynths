import SynthFxUtils from './synth-fx-utils';

describe('SynthFxUtils', () => {
    it('should return the correct milliSeconds for quarters', () => {
        expect(SynthFxUtils.getQuarterNote(100)).toEqual(0.6);
    });

    it('should return the correct milliSeconds for eigths', () => { 
        expect(SynthFxUtils.getEighthNote(100)).toEqual(0.3);
    });

    it('should return the correct milliSeconds for sixteenths', () => { 
        expect(SynthFxUtils.getSixteenthNote(100)).toEqual(0.15);
    });

    it('should return the correct milliSeconds for triplets', () => {
        expect(SynthFxUtils.getTripletEighthNote(100)).toEqual(0.4);
    });
});