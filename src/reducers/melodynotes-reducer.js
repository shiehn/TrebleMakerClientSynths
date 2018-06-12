import { SWITCH_MELODY_PATTERN } from './../actions/melodynotes-actions' 
import update from 'immutability-helper';

export default function melodyNotesReducer(state = [], {type, payload}){
 
    switch(type){
        case SWITCH_MELODY_PATTERN:

            var newPayload;

            var length = payload.melodyNotes.length;
            for (var i=0; i < length; i++){  
                if (payload.melodyNotes[i].selected === true) { 
                    if(i+1 === length){
                        newPayload = update(payload, { melodyNotes:{ 0:{ selected:{ $set: true }}}});
                    }else{
                        var nextIndex = i+1;
                        newPayload = update(payload, {melodyNotes:{ [nextIndex]:{selected:{$set:true}}}});
                    }
                    newPayload = update(newPayload, {melodyNotes:{[i]:{selected:{$set:false}}}});
                    break;
                } 
            } 

//            const newState = Object.assign({}, payload, payload);


            return newPayload.melodyNotes
        default:
            return state;
    }
}