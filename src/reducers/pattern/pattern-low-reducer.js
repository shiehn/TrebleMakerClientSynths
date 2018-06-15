import update from 'immutability-helper';
import * as CONSTS from './../../consts';

export default function patternLowReducer(state = [], {type, payload}){
    switch(type){
        case CONSTS.LOW_PATTERN:
           var newPayload;
           var length = payload.pattern.length;
           for (var i=0; i < length; i++){  
               if (payload.pattern[i].selected === true) { 
                   if(i+1 === length){
                       newPayload = update(payload, { pattern:{ 0:{ selected:{ $set: true }}}});
                   }else{
                       var nextIndex = i+1;
                       newPayload = update(payload, {pattern:{ [nextIndex]:{selected:{$set:true}}}});
                   }
                   newPayload = update(newPayload, {pattern:{[i]:{selected:{$set:false}}}});
                   break;
               } 
           } 

          return newPayload.pattern
        default:
            return state;
    }
}