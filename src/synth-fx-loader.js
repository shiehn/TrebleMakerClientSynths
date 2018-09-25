import Tone from 'tone';
import SynthFxUtils from './synth-fx-utils';

const SynthFxLoader = {
    "getSynthFx": (fxName, bpm) => {
        switch (fxName) {
            case "melfx1":
                var volume = new Tone.Volume(4);
                var delay = new Tone.Distortion({
                    distortion: 1,
                });

                console.log('melfx1')
                return [volume, delay]
            case "melfx2":
                var volume = new Tone.Volume(4);
                var delay = new Tone.PingPongDelay({
                    delayTime: SynthFxUtils.getQuarterNote(bpm),
                    maxDelayTime: 2,
                });
 
                console.log('melfx2')
                return [volume, delay];
            case "hifx1":
                var volume = new Tone.Volume(-17);
                var delay = new Tone.PingPongDelay({
                    delayTime: SynthFxUtils.getEighthNote(bpm),
                    maxDelayTime: 2,
                });
                var bits = new Tone.BitCrusher(4)

                console.log('hifx1')
                return [delay, bits, volume];
            case "hifx2":
                var volume = new Tone.Volume(-17);
                var delay = new Tone.PingPongDelay({
                    delayTime: SynthFxUtils.getQuarterNote(bpm),
                    maxDelayTime: 2,
                });
                var bits = new Tone.BitCrusher(4)

                console.log('hifx2')
                return [delay, bits, volume];
            case "midfx1":
                var volume = new Tone.Volume(-27);
                var vibrato = new Tone.Vibrato({
                    maxDelay: 0.5,
                    frequency: SynthFxUtils.getSixteenthNote(bpm),
                    depth: 1,
                    type: 'square'
                });
                
                console.log('midfx1')
                return [volume, vibrato];
            case "midfx2": 
                var volume = new Tone.Volume(-25);
                var vibrato = new Tone.Chorus({
                    frequency: SynthFxUtils.getEighthNote(bpm),
                    delayTime: 1,
                    depth: 1,
                    type: 'sine',
                    spread: 360
                });
                
                console.log('midfx2')
                return [volume, vibrato];
            case "lowfx1":
                var pitch = new Tone.PitchShift()
                pitch.pitch = -12
                var volume = new Tone.Volume(-11);

                console.log('lowfx1')
                return [pitch, volume];
            case "lowfx2":
                var pitch = new Tone.PitchShift()
                pitch.pitch = -12
                var volume = new Tone.Volume(-11);
                
                console.log('lowfx2')
                return [pitch, volume];
            case "kickfx1":
                var volume1 = new Tone.Volume(-11); 
                return [volume1];
            case "kickfx2":
                var volume1 = new Tone.Volume(-11); 
                return [volume1];
            case "snarefx1":
                var volume1 = new Tone.Volume(-7); 
                return [volume1];
            case "snarefx2":
                var volume1 = new Tone.Volume(-7); 
                return [volume1];
            case "hatfx1":
                var volume1 = new Tone.Volume(-1); 
                return [volume1];
            case "hatfx2":
                var volume1 = new Tone.Volume(-1); 
                return [volume1];
        }
    },
}

export { SynthFxLoader as default }