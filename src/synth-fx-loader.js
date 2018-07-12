import Tone from 'tone';
import SynthFxUtils from './synth-fx-utils';

const SynthFxLoader = {
    "getSynthFx": (fxName, bpm) => {
        switch (fxName) {
            case "melfx1":
                var volume = new Tone.Volume(14);
                //var reverb = new Tone.BitCrusher(8)
                var reverb = new Tone.Reverb({
                    decay: 2.5,
                    preDelay: 0.1
                });

                return [volume, reverb]
            case "melfx2":
                var volume = new Tone.Volume(14);
                var reverb = new Tone.Reverb({
                    decay: 1.5,
                    preDelay: 0.01
                });

                return [volume, reverb];
            case "hifx1":
                var volume = new Tone.Volume(-13);
                var delay = new Tone.PingPongDelay({
                    delayTime: SynthFxUtils.getEighthNote(bpm),
                    maxDelayTime: 2,
                });
                var bits = new Tone.BitCrusher(4)

                return [delay, bits, volume];
            case "hifx2":
                var volume = new Tone.Volume(-13);
                var delay = new Tone.PingPongDelay({
                    delayTime: SynthFxUtils.getQuarterNote(bpm),
                    maxDelayTime: 2,
                });
                var bits = new Tone.BitCrusher(4)

                return [delay, bits, volume];
            case "midfx1":
                var volume = new Tone.Volume(-23);
                var vibrato = new Tone.Vibrato({
                    maxDelay: 0.5,
                    frequency: SynthFxUtils.getSixteenthNote(bpm),
                    depth: 1,
                    type: 'square'
                });
                return [volume, vibrato];
            case "midfx2": 
                var volume = new Tone.Volume(-21);
                var vibrato = new Tone.Chorus({
                    frequency: SynthFxUtils.getEighthNote(bpm),
                    delayTime: 1,
                    depth: 1,
                    type: 'sine',
                    spread: 360
                });
                return [volume, vibrato];
            case "lowfx1":
                var pitch = new Tone.PitchShift()
                pitch.pitch = -12
                var volume = new Tone.Volume(-6);

                return [pitch, volume];
            case "lowfx2":
                var pitch = new Tone.PitchShift()
                pitch.pitch = -12
                var volume = new Tone.Volume(-6);
                return [pitch, volume];
            case "kickfx1":
                var volume1 = new Tone.Volume(-6); 
                return [volume1];
            case "kickfx2":
                var volume1 = new Tone.Volume(-6); 
                return [volume1];
            case "snarefx1":
                var volume1 = new Tone.Volume(-6); 
                return [volume1];
            case "snarefx2":
                var volume1 = new Tone.Volume(-6); 
                return [volume1];
            case "hatfx1":
                var volume1 = new Tone.Volume(0); 
                return [volume1];
            case "hatfx2":
                var volume1 = new Tone.Volume(0); 
                return [volume1];
        }
    },
}

export { SynthFxLoader as default }