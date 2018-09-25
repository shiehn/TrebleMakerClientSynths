export const UPDATE_SHOWLOADING = 'showloading:updateShowLoading'

export function updateShowLoading(showLoadingValue) {
    return {
        type: UPDATE_SHOWLOADING,
        payload: {
            showLoading: showLoadingValue
        } 
    };
};

