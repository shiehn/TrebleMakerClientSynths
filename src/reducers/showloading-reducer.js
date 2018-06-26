import { UPDATE_SHOWLOADING } from './../actions/showloading-actions' 

export default function showLoadingReducer(state = false, {type, payload}){
 
    switch(type){
        case UPDATE_SHOWLOADING: 
            if(payload.showLoading){
                return true;
            }else{
                return false;
            }
        default:
            return state;
    }
}