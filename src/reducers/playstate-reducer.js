import { UPDATE_PLAYSTATE } from './../actions/playstate-actions' 

export default function playStateReducer(state = false, {type, payload}){

    console.log('HERE HERE HERE HERE')
    console.log('TYPE', type)

    switch(type){
        case UPDATE_PLAYSTATE:
            return payload.playState;
        default:
            return state;
    }
}