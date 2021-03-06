import { load } from 'midiconvert';
//this.updateTrackId
const MidiLoader = {
    getTrackId(SERVER_ENDPOINT, TRACK, midiJson, context){
        fetch(SERVER_ENDPOINT).then(function(response) {
            return response.json()
        }).then(function(json) { 
            TRACK.id = json.name;  
            TRACK.selectedMelody = json.selectedMelody;
            
            var bpm = -99
            if(json.stationId === 1){
                bpm = 80;
            }else if(json.stationId === 2){
                bpm = 120;
            }else if(json.stationId === 3){
                bpm = 100;
            }

            TRACK.bpm = bpm;

            fetch("https://s3-us-west-2.amazonaws.com/songseeds/" + TRACK.id + "/0comphi.mid").then(function(response) {
                if (response.ok) {
                    context.updateTrackId();
                    MidiLoader.loadMidi(midiJson, TRACK)
                } else {
                    console.log('UNABLE TO LOAD TRACK!!!!')
                    context.reloadMidi()
                }
            })
        }); 
    },
    loadMidi(midiJson, TRACK) {
        console.log('TRACK INFO', TRACK)

        var melodyFile = "/0compmelodic.mid";
        if(TRACK.selectedMelody === 1){
            melodyFile = "/0compmelodic_0.mid";
        }else if(TRACK.selectedMelody === 2){
            melodyFile = "/0compmelodic_1.mid";
        }else if(TRACK.selectedMelody === 3){
            melodyFile = "/0compmelodic_2.mid";
        }else if(TRACK.selectedMelody === 4){
            melodyFile = "/0compmelodic_3.mid";
        }else if(TRACK.selectedMelody === 5){
            melodyFile = "/0compmelodic_4.mid";
        }
 
        load("https://s3-us-west-2.amazonaws.com/songseeds/" + TRACK.id + melodyFile, function (midi) {
            midiJson.midiMel = midi; 
        })

        load("https://s3-us-west-2.amazonaws.com/songseeds/" + TRACK.id + "/0comphi.mid", function (midi) {
            midiJson.midiHi = midi; 
        })

        load("https://s3-us-west-2.amazonaws.com/songseeds/" + TRACK.id + "/0compmid.mid", function (midi) {
            midiJson.midiMid = midi; 
        })

        load("https://s3-us-west-2.amazonaws.com/songseeds/" + TRACK.id + "/0complow.mid", function (midi) {
            midiJson.midiLow = midi; 
        })

        load("https://s3-us-west-2.amazonaws.com/songseeds/" + TRACK.id + "/0compkick.mid", function (midi) {
            midiJson.midiKick = midi; 
        })
        
        load("https://s3-us-west-2.amazonaws.com/songseeds/" + TRACK.id + "/0compsnare.mid", function (midi) {
            midiJson.midiSnare = midi; 
        })
        
        load("https://s3-us-west-2.amazonaws.com/songseeds/" + TRACK.id + "/0comphats.mid", function (midi) {
            midiJson.midiHat = midi;  
        })

        return true;
    }
}

export { MidiLoader as default }  
