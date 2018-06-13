import * as CONSTS from './../consts';

export function switchSynth(synthId, synths) {
    switch(synthId){
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
