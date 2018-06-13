import * as CONSTS from './../consts';

export function switchPattern(patternId, pattern) {
    console.log('switch pattern', patternId, pattern)
    switch(patternId){
        case CONSTS.MELODY_PATTERN:
            return {
                type: patternId,
                payload: {
                    pattern: pattern
                }
            }; 
        case CONSTS.HI_PATTERN:
            return {
                type: patternId,
                payload: {
                    pattern: pattern
                }
            }; 
        case CONSTS.MID_PATTERN:
            return {
                type: patternId,
                payload: {
                    pattern: pattern
                }
            }; 
        case CONSTS.LOW_PATTERN:
            return {
                type: patternId,
                payload: {
                    pattern: pattern
                }
            }; 
        case CONSTS.KICK_PATTERN:
            return {
                type: patternId,
                payload: {
                    pattern: pattern
                }
            }; 
        case CONSTS.SNARE_PATTERN:
            return {
                type: patternId,
                payload: {
                    pattern: pattern
                }
            }; 
        case CONSTS.HAT_PATTERN:
            return {
                type: patternId,
                payload: {
                    pattern: pattern
                }
            }; 
    }
}
