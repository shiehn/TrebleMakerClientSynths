import { load } from 'midiconvert';

const MidiLoader = {
    loadMidi(midiJson) {
        load("/0compmelodic.mid", function (midi) {
            midiJson.midiMel = midi;
        })

        load("/0comphi.mid", function (midi) {
            midiJson.midiHi = midi;
        })

        load("/0compmid.mid", function (midi) {
            midiJson.midiMid = midi;
        })

        load("/0complow.mid", function (midi) {
            midiJson.midiLow = midi;
        })
        
        load("/kick-test.mid", function (midi) {
            midiJson.midiKick = midi;
        })
        
        load("/snare-test.mid", function (midi) {
            midiJson.midiSnare = midi;
        })
        
        load("/hat-test.mid", function (midi) {
            midiJson.midiHat = midi;
            console.log('MIIIDDDIII', midiJson)
        })

        return true;
    }
}

export { MidiLoader as default }  