import Tone from 'tone';
import * as CONST from './consts';


const SynthLoader = {
    [CONST.SYNTH_TYPE_MEL]: undefined,
    [CONST.SYNTH_TYPE_HI]: undefined,
    [CONST.SYNTH_TYPE_MID]: undefined,
    [CONST.SYNTH_TYPE_LOW]: undefined,

    // "loadAll": (midiJson) => {
    //     SynthLoader.hi = SynthLoader.load(CONST.SYNTH_TYPE_HI, 'wip', midiJson);
    //     SynthLoader.mid = SynthLoader.load(CONST.SYNTH_TYPE_MID, 'wip', midiJson);
    //     SynthLoader.low = SynthLoader.load(CONST.SYNTH_TYPE_LOW, 'wip', midiJson);
    //     SynthLoader.mel = SynthLoader.load(CONST.SYNTH_TYPE_MEL, 'wip', midiJson);
    // },
    "startAll": () => {
        SynthLoader.mel.start(0);
        SynthLoader.hi.start(0);
        SynthLoader.mid.start(0);
        SynthLoader.low.start(0);
    },
    "load": (type, synthName, midiJson) => {
        switch (type) {
            case CONST.SYNTH_TYPE_MEL:
                console.log('LOAD MEL', synthName)
                SynthLoader.mel = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthName).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiMel.tracks[0].notes);
            case CONST.SYNTH_TYPE_HI:
                SynthLoader.hi = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthName).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiHi.tracks[0].notes);
            case CONST.SYNTH_TYPE_MID:
                SynthLoader.mid = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthName).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiMid.tracks[0].notes);
            case CONST.SYNTH_TYPE_LOW:
                SynthLoader.low = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthName).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiLow.tracks[0].notes);
            default:
                return null;
        }
    },
    "getSynth": (name) => {
        console.log('NAME', name)
        switch (name) {
            case "s1":
                console.log('RETURN S1 SYNTH')
                return new Tone.Synth().chain(Tone.Master);
            case "s2":
                return new Tone.PluckSynth().chain(Tone.Master);
            default:
                return null;
        }
    },

    // loadSynths(midiJson) {
    //     new Tone.Part(function (time, note) {
    //         // console.log("t1", time)
    //         var synth2 = new Tone.Synth().chain(Tone.Master)

    //         console.log(note)

    //         synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity)
    //     }, midiJson.midiMel.tracks[0].notes).start(0)

    //     new Tone.Part(function (time, note) {


    //         // console.log("t2", time)
    //         var synth2 = new Tone.PluckSynth().chain(Tone.Master)
    //         synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity)
    //     }, midiJson.midiHi.tracks[0].notes).start(0)

    //     // // *********************************************
    //     new Tone.Part(function (time, note) {


    //         // console.log("t3", time)

    //         var synth2 = new Tone.Synth().chain(Tone.Master)

    //         synth2.detune.value = synth2.detune.value - 1200

    //         synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity)
    //     }, midiJson.midiMid.tracks[0].notes).start(0)

    //     // // *********************************************
    //     new Tone.Part(function (time, note) {

    //         // console.log("t4", time)
    //         var synth2 = new Tone.Synth().chain(Tone.Master)

    //         synth2.detune.value = synth2.detune.value - 1200
    //         synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity)
    //     }, midiJson.midiLow.tracks[0].notes).start(0)

    //     return "my string"
    // }
}

export { SynthLoader as default };