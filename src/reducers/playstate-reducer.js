import { UPDATE_PLAYSTATE } from './../actions/playstate-actions' 

export default function playStateReducer(state = false, {type, payload}){
    switch(type){
        case UPDATE_PLAYSTATE:
            return payload.playState;
        default:
            return state;
    }
}