import { UPDATE_SHOWVIDEO } from './../actions/showvideo-actions' 

export default function showVideoReducer(state = false, {type, payload}){
 
    switch(type){
        case UPDATE_SHOWVIDEO:
            if(payload.showVideo){
                console.log('SHOW THAT SHIT')
                return true;
            }else{
                console.log('HIDE THAT SHIT')
                return false;
            }
        default:
            return state;
    }
}