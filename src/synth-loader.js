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
    "startAll": (offset) => {
        SynthLoader.mel.start();
        SynthLoader.hi.start();
        SynthLoader.mid.start();
        SynthLoader.low.start();
    },
    "load": (type, synthName, midiJson) => {
        switch (type) {
            case CONST.SYNTH_TYPE_MEL:
                console.log('LOAD MEL', synthName)
                SynthLoader.mel = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthName).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiMel.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_HI:
                SynthLoader.hi = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthName).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiHi.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_MID:
                SynthLoader.mid = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthName).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiMid.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_LOW:
                SynthLoader.low = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthName).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiLow.tracks[0].notes);
                return;
            default:
                return null;
        }
    },
    "getSynth": (name) => {
        switch (name) {
            case "s1":
                var volume = new Tone.Volume(0);
                var reverb = new Tone.BitCrusher (8)
                var fx = [volume, reverb];

                return new Tone.Synth().chain(fx[0], fx[1], Tone.Master);
            case "s2":
                var volume = new Tone.Volume(-40);
                var reverb = new Tone.Reverb({
                    decay: 1.5,
                    preDelay: 0.01
                });
                var fx = [volume, reverb];

                return new Tone.PluckSynth().chain(fx[0], Tone.Master);
            case "hi1":
                var pitch = new Tone.PingPongDelay({
                    delayTime: 0.25,
                    maxDelayTime: 2,
                });
                var bits = new Tone.BitCrusher(4)

                var fx = [pitch, bits];

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
                var volume = new Tone.Volume(-15);
                var fx = [volume];

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
                var volume = new Tone.Volume(-15);
                var fx = [volume];

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
                var pitch = new Tone.PitchShift()
                pitch.pitch = -12

                var volume = new Tone.Volume(5);
                var fx = [pitch, volume];

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
                var pitch = new Tone.PitchShift()
                pitch.pitch = -12

                var volume = new Tone.Volume(5);
                var fx = [pitch, volume];

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
            default:
                return null;
        }
    },
    "getFx": (fx) => {
        switch (fx) {
            case "lowfx1":
                return
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