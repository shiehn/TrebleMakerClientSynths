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

        console.log('SynthLoader.snare', SynthLoader.snare)
        console.log('SynthLoader.hat', SynthLoader.hat)


        SynthLoader.snare.start();
        SynthLoader.hat.start();
    },
    "load": (type, synthId, fxId, bpm, midiJson) => {

        console.log('MIDI-JSON', type, midiJson)

        switch (type) {
            case CONST.SYNTH_TYPE_MEL:
                SynthLoader.mel = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId, bpm).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiMel.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_HI:
                SynthLoader.hi = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId, bpm).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiHi.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_MID:
                SynthLoader.mid = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId, bpm).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiMid.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_LOW:
                SynthLoader.low = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId, bpm).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiLow.tracks[0].notes);
                return;
            case CONST.SYNTH_TYPE_KICK:
                SynthLoader.kick = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId, bpm).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiKick.tracks[0].notes);
                return;



                // SynthLoader.kick = new Tone.Part(function (time, note) {
                //     var sampler = new Tone.Sampler({
                //         "C0" : "f9thkick00.wav", 
                //     }, function(){
                //         //sampler will repitch the closest sampl 
                //         sampler.triggerAttackRelease("C0", note.duration, time, 1)
                //     },"/").toMaster()
                //     //SynthLoader.getSynth(synthId, fxId, bpm).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                // }, midiJson.midiKick.tracks[1].notes);

                return;
            case CONST.SYNTH_TYPE_SNARE:

                SynthLoader.snare = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId, bpm).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiSnare.tracks[0].notes);
                return;
            



            case CONST.SYNTH_TYPE_HAT: 
                SynthLoader.hat = new Tone.Part(function (time, note) {
                    SynthLoader.getSynth(synthId, fxId, bpm).triggerAttackRelease(note.name, note.duration, time, note.velocity)
                }, midiJson.midiHat.tracks[0].notes);
                return;

            // SynthLoader.snare = new Tone.Part(function (time, note) {
            //     var sampler = new Tone.Sampler({
            //         "C0" : "BtSnare_01_SP.wav", 
            //     }, function(){
            //         //sampler will repitch the closest sampl 
            //         sampler.triggerAttackRelease("C0", note.duration, time, 0.2)
            //     },"/").toMaster()
            // }, midiJson.midiSnare.tracks[1].notes)
            // return;
            // case CONST.SYNTH_TYPE_HAT:
            //     SynthLoader.hat = new Tone.Part(function (time, note) {
            //         var sampler = new Tone.Sampler({
            //             "C0": "FoHat_01_SP.wav",
            //         }, function () {
            //             //sampler will repitch the closest sampl 
            //             sampler.triggerAttackRelease("C0", note.duration, time, 0.1)
            //         }, "/").toMaster()
            //     }, midiJson.midiHat.tracks[1].notes);
            //     return;
            default:
                return null;
        }
    },
    "getSynth": (synthId, fxId, bpm) => {
        switch (synthId) {
            case "mel1":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
                return new Tone.PluckSynth().chain(new Tone.Volume(-10), fx[1], Tone.Master);
            case "mel2":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
                return new Tone.AMSynth().chain(new Tone.Volume(-8), fx[1], Tone.Master);
            case "mel3":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
                return new Tone.AMSynth({
                    harmonicity: 2,
                    detune: 0,
                    oscillator: {
                        type: 'triangle'
                    },
                    envelope: {
                        attack: 0.001,
                        decay: 0.01,
                        sustain: 0.5,
                        release: 0.01
                    },
                    modulation: {
                        type: 'sine'
                    },
                    modulationEnvelope: {
                        attack: 0.5,
                        decay: 0,
                        sustain: 1,
                        release: 0.1
                    }
                }).chain(new Tone.Volume(-4), fx[1], Tone.Master);
            case "mel4":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
                return new Tone.DuoSynth({
                    vibratoAmount: 0.5,
                    vibratoRate: 6,
                    harmonicity: 1,
                    voice0: {
                        volume: -10,
                        portamento: 4,
                        oscillator: {
                            type: 'sine'
                        },
                        filterEnvelope: {
                            attack: 0.01,
                            decay: 1,
                            sustain: 1,
                            release: 0.5
                        },
                        envelope: {
                            attack: 0.1,
                            decay: 0.1,
                            sustain: 1,
                            release: 0.5
                        }
                    },
                    voice1: {
                        volume: -10,
                        portamento: 0,
                        oscillator: {
                            type: 'sine'
                        },
                        filterEnvelope: {
                            attack: 0.01,
                            decay: 0,
                            sustain: 1,
                            release: 0.5
                        },
                        envelope: {
                            attack: 0.02,
                            decay: 0,
                            sustain: 0.1,
                            release: 0.5
                        }
                    }
                }).chain(new Tone.Volume(-24), fx[1], Tone.Master);
            case "hi1":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
                return new Tone.Synth({
                    oscillator: {
                        type: 'square'
                    },
                    envelope: {
                        attack: 0.001,
                        decay: 0.5,
                        sustain: 0.01,
                        release: 1
                    }
                }).chain(fx[0], fx[1], fx[2], Tone.Master);
            case "hi2":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
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
                }).chain(fx[0], fx[1], fx[2], Tone.Master);
            case "hi3": 
                return new Tone.PluckSynth({
                    attackNoise: 2,
                    dampening: 8000,
                    resonance: 0.8,
                }).chain(new Tone.Volume(-10), Tone.Master);
            case "hi4": 
                return new Tone.MonoSynth({
                    frequency: 'C4',
                    detune: 0,
                    oscillator: {
                        type: 'sine'
                    },
                    filter: {
                        Q: 6,
                        type: 'lowpass',
                        rolloff: -24
                    },
                    envelope: {
                        attack: 0.005,
                        decay: 0.1,
                        sustain: 0.9,
                        release: 1
                    },
                    filterEnvelope: {
                        attack: 0.06,
                        decay: 0.2,
                        sustain: 0.5,
                        release: 2,
                        baseFrequency: 200,
                        octaves: 7,
                        exponent: 2
                    }
                }).chain(new Tone.Volume(-16), Tone.Master);
            case "mid1":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
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
                ).chain(fx[0], fx[1], Tone.Master);
            case "mid2":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
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
                ).chain(fx[0], fx[1], Tone.Master); 
            case "low1":
            var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
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
            }).chain(fx[0], Tone.Master);
            case "low2":
            var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
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
            }).chain(fx[0], Tone.Master);
            case "low3":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
                return new Tone.AMSynth({
                    harmonicity: 2,
                    detune: 0,
                    oscillator: {
                        type: 'square'
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
                }).chain(fx[0], new Tone.Volume(10), Tone.Master);
            case "low4":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm); 
                return new Tone.FMSynth({
                    harmonicity: 1,
                    modulationIndex: 5,
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
                        type: 'sine'
                    },
                    modulationEnvelope: {
                        attack: 0.5,
                        decay: 0,
                        sustain: 1,
                        release: 0.5
                    }
                }).chain(fx[0], new Tone.Volume(6), Tone.Master);
            case "kick1": 
                var fx = SynthFxLoader.getSynthFx(fxId, bpm);
                return new Tone.MembraneSynth({
                    'pitchDecay'  : 0.05 ,
                    'octaves'  : 10,
                    'oscillator'  : {
                    'type'  : 'sine'
                    }  ,
                    'envelope' : {
                    'attack'  : 0.001 ,
                    'decay'  : 0.4 ,
                    'sustain'  : 0.01 ,
                    'release'  : 1.4 ,
                    'attackCurve'  : 'exponential'
                    }
                    }).chain(fx[0], Tone.Master);
            case "kick2": 
                var fx = SynthFxLoader.getSynthFx(fxId, bpm);
                return new Tone.MembraneSynth({
                    'pitchDecay'  : 0.05 ,
                    'octaves'  : 10,
                    'oscillator'  : {
                    'type'  : 'sine'
                    }  ,
                    'envelope' : {
                    'attack'  : 0.001 ,
                    'decay'  : 0.4 ,
                    'sustain'  : 0.01 ,
                    'release'  : 1.4 ,
                    'attackCurve'  : 'exponential'
                    }
                    }).chain(fx[0], Tone.Master);
            case "snare1":
            case "snare2": 
                var fx = SynthFxLoader.getSynthFx(fxId, bpm);
                return new Tone.PluckSynth({
                    attackNoise: 1,
                    dampening: 10000,
                    resonance: 0.7
                }).chain(fx[0], Tone.Master);
            case "hat1":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm);
                return new Tone.PluckSynth({
                    attackNoise: 2,
                    dampening: 20000,
                    resonance: 0.5
                }).chain(fx[0], Tone.Master);
            case "hat2":
                var fx = SynthFxLoader.getSynthFx(fxId, bpm);
                return new Tone.MetalSynth().chain(fx[0], Tone.Master);
            default:
                return null;
        }
    }, 
}

export { SynthLoader as default };