import * as CONSTS from './../consts';

function selectRandomSynth(synthId, synths) {
    switch (synthId) {
        case CONSTS.MELODY_SYNTH:
            return {
                type: synthId,
                payload: {
                    synths: synths
                }
            };
    }
}

function switchSynth(synthId, synths) {
    switch (synthId) {
        case CONSTS.MELODY_SYNTH:
            return {
                type: synthId,
                payload: {
                    synths: synths
                }
            };
        case CONSTS.HI_SYNTH:
            return {
                type: synthId,
                payload: {
                    synths: synths
                }
            };
        case CONSTS.MID_SYNTH:
            return {
                type: synthId,
                payload: {
                    synths: synths
                }
            };
        case CONSTS.LOW_SYNTH:
            return {
                type: synthId,
                payload: {
                    synths: synths
                }
            };
        case CONSTS.KICK_SYNTH:
            return {
                type: synthId,
                payload: {
                    synths: synths
                }
            };
        case CONSTS.SNARE_SYNTH:
            return {
                type: synthId,
                payload: {
                    synths: synths
                }
            };
        case CONSTS.HAT_SYNTH:
            return {
                type: synthId,
                payload: {
                    synths: synths
                }
            };
    }
}

export { selectRandomSynth, switchSynth }
