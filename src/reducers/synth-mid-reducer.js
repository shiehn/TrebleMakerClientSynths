import update from 'immutability-helper';
import * as CONSTS from './../consts';

export default function synthMidReducer(state = [], {type, payload}){
    switch(type){
        case CONSTS.MID_SYNTH:
           var newPayload;
           var length = payload.synths.length;
           for (var i=0; i < length; i++){  
               if (payload.synths[i].selected === true) { 
                   if(i+1 === length){
                       newPayload = update(payload, { synths:{ 0:{ selected:{ $set: true }}}});
                   }else{
                       var nextIndex = i+1;
                       newPayload = update(payload, {synths:{ [nextIndex]:{selected:{$set:true}}}});
                   }
                   newPayload = update(newPayload, {synths:{[i]:{selected:{$set:false}}}});
                   break;
               } 
           } 

          return newPayload.synths
        default:
            return state;
    }
}