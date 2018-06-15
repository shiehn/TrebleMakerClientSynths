import * as CONSTS from './../consts';

export function switchFx(fxId, fxs) {
    switch(fxId){
        case CONSTS.MELODY_FX:
            return {
                type: fxId,
                payload: {
                    fx: fxs
                }
            }; 
        case CONSTS.HI_FX:
            return {
                type: fxId,
                payload: {
                    fx: fxs
                }
            }; 
        case CONSTS.MID_FX:
            return {
                type: fxId,
                payload: {
                    fx: fxs
                }
            }; 
        case CONSTS.LOW_FX:
            return {
                type: fxId,
                payload: {
                    fx: fxs
                }
            }; 
        case CONSTS.KICK_FX:
            return {
                type: fxId,
                payload: {
                    fx: fxs
                }
            }; 
        case CONSTS.SNARE_FX:
            return {
                type: fxId,
                payload: {
                    fx: fxs
                }
            }; 
        case CONSTS.HAT_FX:
            return {
                type: fxId,
                payload: {
                    fx: fxs
                }
            }; 
    }
}
