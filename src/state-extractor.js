import * as CONSTS from './consts';

const StateExtraction = {
    "getSelectedPattern": (pattern) => {
        for (var i = 0; i < pattern.length; i++) {
            if (pattern[i].selected == true) {
                return pattern[i];
            }
        }
    },
    "getSelectedSynth": (type, synths) => {
        switch (type) {
            case CONSTS.SYNTH_TYPE_MEL:
                for (var i = 0; i < synths.length; i++) {
                    if (synths[i].selected == true) {
                        return synths[i];
                    }
                }
            case CONSTS.SYNTH_TYPE_HI:
                for (var i = 0; i < synths.length; i++) {
                    if (synths[i].selected == true) {
                        return synths[i];
                    }
                }
            case CONSTS.SYNTH_TYPE_MID:
                for (var i = 0; i < synths.length; i++) {
                    if (synths[i].selected == true) {
                        return synths[i];
                    }
                }
            case CONSTS.SYNTH_TYPE_LOW:
                for (var i = 0; i < synths.length; i++) {
                    if (synths[i].selected == true) {
                        return synths[i];
                    }
                }
        }

        return null;
    },
};

export { StateExtraction as default }