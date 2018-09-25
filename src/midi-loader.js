import { load } from 'midiconvert';

const MidiLoader = {
    getTrackId(SERVER_ENDPOINT, TRACK, midiJson){ 
        fetch(SERVER_ENDPOINT).then(function(response) { 
            return response.json()
        }).then(function(json) { 
            TRACK.id = json.name; 
            TRACK.selectedMelody = json.selectedMelody;
            MidiLoader.loadMidi(midiJson, json.name, TRACK)
        }); 
    },  
    loadMidi(midiJson, trackId, TRACK) { 

        var melodyFile = "/0compmelodic.mid";
        if(TRACK.selectedMelody === 1){
            melodyFile = "/0compmelodic_0.mid";
        }else if(TRACK.selectedMelody === 2){
            melodyFile = "/0compmelodic_1.mid";
        }
 
        load("https://s3-us-west-2.amazonaws.com/songseeds/" + trackId + melodyFile, function (midi) {
            midiJson.midiMel = midi;
        })

        load("https://s3-us-west-2.amazonaws.com/songseeds/" + trackId + "/0comphi.mid", function (midi) {
            midiJson.midiHi = midi;
            TRACK.bpm = midiJson.midiHi.header.bpm;  
        })

        load("https://s3-us-west-2.amazonaws.com/songseeds/" + trackId + "/0compmid.mid", function (midi) {
            midiJson.midiMid = midi;
        })

        load("https://s3-us-west-2.amazonaws.com/songseeds/" + trackId + "/0complow.mid", function (midi) {
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
        })

        return true;
    }
}

export { MidiLoader as default }  
