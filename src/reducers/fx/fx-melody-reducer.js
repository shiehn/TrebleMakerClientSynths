import update from 'immutability-helper';
import * as CONSTS from './../../consts';

export default function fxMelodyReducer(state = [], {type, payload}){
    console.log('PPPPPPPP', payload)
    switch(type){
        case CONSTS.MELODY_FX:
            var newPayload;
            var length = payload.fx.length;
            for (var i=0; i < length; i++){  
                if (payload.fx[i].selected === true) { 
                    if(i+1 === length){
                        newPayload = update(payload, { fx:{ 0:{ selected:{ $set: true }}}});
                    }else{
                        var nextIndex = i+1;
                        newPayload = update(payload, {fx:{ [nextIndex]:{selected:{$set:true}}}});
                    }
                    newPayload = update(newPayload, {fx:{[i]:{selected:{$set:false}}}});
                    break;
                } 
            } 

           return newPayload.fx
        default:
            return state;
    }
}