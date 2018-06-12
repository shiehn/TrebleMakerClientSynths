export const UPDATE_PLAYSTATE = 'playstate:updatePlayState'


export function updatePlayState(playStateValue) {
    return {
        type: UPDATE_PLAYSTATE,
        payload: {
            playState: playStateValue
        } 
    };
};

