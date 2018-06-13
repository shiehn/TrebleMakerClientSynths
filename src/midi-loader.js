import {load} from 'midiconvert';

const MidiLoader = {
    loadMidi(midiJson) { 
        load("/0compmelodic.mid", function(midi) {
            midiJson.midiMel = midi;
          })
      
          load("/0comphi.mid", function(midi) {
            midiJson.midiHi = midi;
          })
      
          load("/0compmid.mid", function(midi) {
             midiJson.midiMid = midi;
          })
          
          load("/0complow.mid", function(midi) {
             midiJson.midiLow = midi;
          })

        return true; 
    }
}

export { MidiLoader as default }  