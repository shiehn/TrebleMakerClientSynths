export const SWITCH_MELODY_PATTERN = 'playstate:updateMelodyPattern'
export const SWITCH_HI_PATTERN = 'playstate:updateHiPattern'
export const SWITCH_MID_PATTERN = 'playstate:updateMidPattern'
export const SWITCH_LOW_PATTERN = 'playstate:updateLowPattern'
export const SWITCH_KICK_PATTERN = 'playstate:updateKickPattern'
export const SWITCH_SNARE_PATTERN = 'playstate:updateSnarePattern'
export const SWITCH_HAT_PATTERN = 'playstate:updateHatPattern'

export function switchPattern(melodyNotes) {

    console.log('pattern', melodyNotes)

    return {
        type: SWITCH_MELODY_PATTERN,
        payload: {
            melodyNotes: melodyNotes
        }
    };
};

