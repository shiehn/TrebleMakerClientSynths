import Tone from 'tone';
import SynthFxUtils from './synth-fx-utils';

const SynthFxLoader = {
    "getSynthFx": (fxName, bpm) => {
        switch (fxName) {
            case "melfx1":
                var volume = new Tone.Volume(6);
                var delay = new Tone.Distortion({
                    distortion: 1,
                });
 
                return [volume, delay]
            case "melfx2":
                var volume = new Tone.Volume(6);
                // var delay = new Tone.PingPongDelay({
                //     delayTime: SynthFxUtils.getQuarterNote(bpm),
                //     maxDelayTime: 2,
                // });
                var delay = new Tone.Delay ({
                    delayTime: SynthFxUtils.getQuarterNote(bpm),
                    maxDelayTime: 2,
                });

                return [volume, delay];
            case "hifx1":
                var volume = new Tone.Volume(-17);
                var delay = new Tone.Delay ({
                    delayTime: SynthFxUtils.getEighthNote(bpm),
                    maxDelayTime: 2,
                });
                // var delay = new Tone.PingPongDelay({
                //     delayTime: SynthFxUtils.getEighthNote(bpm),
                //     maxDelayTime: 2,
                // });
 
                var bits = new Tone.BitCrusher(4)
 
                return [delay, bits, volume];
            case "hifx2":
                var volume = new Tone.Volume(-17);
                // var delay = new Tone.PingPongDelay({
                //     delayTime: SynthFxUtils.getQuarterNote(bpm),
                //     maxDelayTime: 2,
                // });
                var delay = new Tone.Delay ({
                    delayTime: SynthFxUtils.getEighthNote(bpm),
                    maxDelayTime: 2,
                });
                var bits = new Tone.BitCrusher(4)
 
                return [delay, bits, volume];
            case "midfx1":
                var volume = new Tone.Volume(-18);
                var vibrato = new Tone.Vibrato({
                    maxDelay: 0.5,
                    frequency: SynthFxUtils.getSixteenthNote(bpm),
                    depth: 1,
                    type: 'square'
                }); 

                return [volume, vibrato];
            case "midfx2": 
                var volume = new Tone.Volume(-16);
                var vibrato = new Tone.Vibrato({
                    maxDelay: 0.5,
                    frequency: SynthFxUtils.getSixteenthNote(bpm),
                    depth: 1,
                    type: 'square'
                }); 
                // var vibrato = new Tone.Chorus({
                //     frequency: SynthFxUtils.getEighthNote(bpm),
                //     delayTime: 1,
                //     depth: 1,
                //     type: 'sine',
                //     spread: 360
                // });
                 
                return [volume, vibrato];
            case "lowfx1": 
                var volume = new Tone.Volume(-2); 
                return [volume];
            case "lowfx2": 
                var volume = new Tone.Volume(-2); 
                return [volume];
            case "kickfx1": 
                var volume = new Tone.Volume(2);  
                return [volume];
            case "kickfx2":
                var volume = new Tone.Volume(2); 
                return [volume];
            case "snarefx1":
                var volume = new Tone.Volume(0); 
                return [volume];
            case "snarefx2":
                var volume = new Tone.Volume(0); 
                return [volume];
            case "hatfx1":
                var volume = new Tone.Volume(-8); 
                return [volume];
            case "hatfx2":
                var volume = new Tone.Volume(-8); 
                return [volume];
        }
    },
}

export { SynthFxLoader as default }