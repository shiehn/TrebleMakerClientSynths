const SynthFxUtils = {
    "msInMinute": 60000,
    "getQuaterNote": (bpm) => {
        return (SynthFxUtils.msInMinute/bpm)/1000;
    },
    "getEightNote": (bpm) => {
        return ((SynthFxUtils.msInMinute/bpm)/2)/1000
    },
    "getSixteenNote": (bpm) => {
        return ((SynthFxUtils.msInMinute/bpm)/4)/1000
    },
    "getTripletEighthNote": (bpm) => {
        return (((SynthFxUtils.msInMinute/bpm)*2)/3)/1000
    },
};

export { SynthFxUtils as default }