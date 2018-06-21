import Tone from 'tone';
import SynthFxLoader from './synth-fx-loader'
import * as CONST from './consts';

const SynthLoader = {
    [CONST.SYNTH_TYPE_MEL]: undefined,
    [CONST.SYNTH_TYPE_HI]: undefined,
    [CONST.SYNTH_TYPE_MID]: undefined,
    [CONST.SYNTH_TYPE_LOW]: undefined,
    [CONST.SYNTH_TYPE_KICK]: undefined,
    [CONST.SYNTH_TYPE_SNARE]: undefined,
    [CONST.SYNTH_TYPE_HAT]: undefined,

    "startAll": (offset) => {
        SynthLoader.mel.start();
        SynthLoader.hi.start();
        SynthLoader.mid.start();
        SynthLoader.low.start();
        SynthLoader.kick.start();
        SynthLoader.snare.start();
        SynthLoader.hat.start();
    },
    "load": (type, synthId, fxId, midiJson) => {
        switch (type) {
            case CONST.SYNTH_TYPE_MEL:
                SynthLoader.mel = new Tone.Part(function (time, note) {
                    console.log('FX ID', fxId)
                    SynthLoader.getSynth(synthId, fxId).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiMel.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_HI:
                SynthLoader.hi = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiHi.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_MID:
                SynthLoader.mid = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiMid.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_LOW:
                SynthLoader.low = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiLow.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_KICK:
                SynthLoader.kick = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiKick.tracks[1].notes);
                return;
            case CONST.SYNTH_TYPE_SNARE:
                SynthLoader.snare = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiSnare.tracks[1].notes);
                return;
            case CONST.SYNTH_TYPE_HAT:
                SynthLoader.hat = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiHat.tracks[1].notes);
                return;
            default:
                return null;
        }
    },
    "getSynth": (synthId, fxId) => {
        switch (synthId) {
            case "mel1":
                var fx = SynthFxLoader.getSynthFx(fxId);
                return new Tone.Synth().chain(fx[0], fx[1], Tone.Master);
            case "mel2":
                var fx = SynthFxLoader.getSynthFx(fxId);
                return new Tone.PluckSynth().chain(fx[0], fx[1], Tone.Master);
            case "hi1":
            case "hi2":
                var fx = SynthFxLoader.getSynthFx(fxId);
                return new Tone.Synth({
                    oscillator: {
                        type: 'sine'
                    },
                    envelope: {
                        attack: 0.001,
                        decay: 0.5,
                        sustain: 0.01,
                        release: 1
                    }
                }).chain(fx[0], Tone.Master);
            case "mid1":
                var fx = SynthFxLoader.getSynthFx(fxId);
                return new Tone.FMSynth({
                    harmonicity: 0,
                    modulationIndex: 0,
                    detune: 0,
                    oscillator: {
                        type: 'sine'
                    },
                    envelope: {
                        attack: 0.01,
                        decay: 0.01,
                        sustain: 1,
                        release: 0.5
                    },
                    modulation: {
                        type: 'square'
                    },
                    modulationEnvelope: {
                        attack: 0.5,
                        decay: 0,
                        sustain: 1,
                        release: 0.5
                    }
                }
                ).chain(fx[0], Tone.Master);
            case "mid2": 
                var fx = SynthFxLoader.getSynthFx(fxId);
                return new Tone.FMSynth({
                    harmonicity: 7,
                    modulationIndex: 3,
                    detune: 0,
                    oscillator: {
                        type: 'sine'
                    },
                    envelope: {
                        attack: 0.01,
                        decay: 0.01,
                        sustain: 1,
                        release: 0.9
                    },
                    modulation: {
                        type: 'triangle'
                    },
                    modulationEnvelope: {
                        attack: 0.9,
                        decay: 0,
                        sustain: 1,
                        release: 0.1
                    }
                }
                ).chain(fx[0], Tone.Master);

            case "low1":
                var fx = SynthFxLoader.getSynthFx(fxId);
                return new Tone.Synth({
                    oscillator: {
                        type: 'sine',
                    },
                    envelope: {
                        attack: 0.005,
                        decay: 0.1,
                        sustain: 0.8,
                        release: 1
                    }
                }).chain(fx[0], fx[1], Tone.Master);
            case "low2":
                var fx = SynthFxLoader.getSynthFx(fxId)
                return new Tone.Synth({
                    oscillator: {
                        type: 'triangle',
                    },
                    envelope: {
                        attack: 0.005,
                        decay: 0.1,
                        sustain: 0.8,
                        release: 1
                    }
                }).chain(fx[0], fx[1], Tone.Master);
            case "kick1":
                var fx = SynthFxLoader.getSynthFx(fxId)
                return new Tone.MembraneSynth().chain(fx[0], fx[1], Tone.Master);
            case "kick2":
                var fx = SynthFxLoader.getSynthFx(fxId)
                return new Tone.MembraneSynth().chain(fx[0], fx[1], Tone.Master);
            case "snare1":
                var fx = SynthFxLoader.getSynthFx(fxId)
                return new Tone.MembraneSynth().chain(fx[0], fx[1], Tone.Master);
            case "snare2":
                var fx = SynthFxLoader.getSynthFx(fxId)
                return new Tone.MembraneSynth().chain(fx[0], fx[1], Tone.Master);
            case "hat1":
                var fx = SynthFxLoader.getSynthFx(fxId)
                return new Tone.MembraneSynth().chain(fx[0], fx[1], Tone.Master);
            case "hat2":
                var fx = SynthFxLoader.getSynthFx(fxId)
                return new Tone.MembraneSynth().chain(fx[0], fx[1], Tone.Master);
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