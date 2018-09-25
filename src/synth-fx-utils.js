const SynthFxUtils = {
    "msInMinute": 60000,
    "getQuarterNote": (bpm) => {
        return (SynthFxUtils.msInMinute/bpm)/1000;
    },
    "getEighthNote": (bpm) => {
        return ((SynthFxUtils.msInMinute/bpm)/2)/1000
    },
    "getSixteenthNote": (bpm) => {
        return ((SynthFxUtils.msInMinute/bpm)/4)/1000
    },
    "getTripletEighthNote": (bpm) => {
        return (((SynthFxUtils.msInMinute/bpm)*2)/3)/1000
    },
};

export { SynthFxUtils as default }