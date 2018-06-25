export const UPDATE_SHOWVIDEO = 'showvideo:updateShowVideo'

export function updateShowVideo(showVideoValue) {
    return {
        type: UPDATE_SHOWVIDEO,
        payload: {
            showVideo: showVideoValue
        } 
    };
};

