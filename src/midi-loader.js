import { load } from 'midiconvert';

const MidiLoader = {
    getTrackId(midiJson){
        fetch('http://34.218.69.131:7777/api/track')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log('MY ID', json.name)
            MidiLoader.loadMidi(midiJson, '9069d0ec-836d-477f-a6f7-7f567bc2fcfa')
        });



        // {
        //     "name": "a4211305-f9ab-422f-9db4-b0834b7f71dc",
        //     "stationId": 2
        //     }
    },  
    loadMidi(midiJson, trackId) {
        /*
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
*/        
        load("https://s3-us-west-2.amazonaws.com/songseeds/" + trackId + "/0compmelodic.mid", function (midi) {
            midiJson.midiMel = midi;
        })

        load("https://s3-us-west-2.amazonaws.com/songseeds/" + trackId + "/0comphi.mid", function (midi) {
            midiJson.midiHi = midi;
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
            console.log('MIIIDDDIII', midiJson)
        })

        return true;
    }
}

export { MidiLoader as default }  