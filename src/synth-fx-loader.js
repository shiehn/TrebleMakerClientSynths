import Tone from 'tone'; 

const SynthFxLoader = {
    "getSynthFx": (fxName) => {
        switch(fxName){
            case "melfx1": 
                var volume = new Tone.Volume(0);
                var reverb = new Tone.BitCrusher (8)
            
                return [volume, reverb]
            case "melfx2":
                var volume = new Tone.Volume(-40);
                var reverb = new Tone.Reverb({
                    decay: 1.5,
                    preDelay: 0.01
                });
            
                return [volume, reverb];
            case "hifx1":
                var pitch = new Tone.PingPongDelay({
                    delayTime: 0.25,
                    maxDelayTime: 2,
                });
                var bits = new Tone.BitCrusher(4)
                
                return [pitch, bits];
            case "hifx2":
                var pitch = new Tone.PingPongDelay({
                    delayTime: 0.25,
                    maxDelayTime: 2,
                });
                var bits = new Tone.BitCrusher(4)
                
                return [pitch, bits];
            case "midfx1":
                var volume = new Tone.Volume(-15);
                
                return [volume];
            case "midfx2":
                var volume = new Tone.Volume(-15);
                
                return [volume];
            case "lowfx1":
                var pitch = new Tone.PitchShift()
                pitch.pitch = -12
                var volume = new Tone.Volume(5);
                
                return [pitch, volume];
            case "lowfx2":
                var pitch = new Tone.PitchShift()
                pitch.pitch = -12
                var volume = new Tone.Volume(5);
                return [pitch, volume];
            case "kickfx1":
                var volume1 = new Tone.Volume(0);
                var volume2 = new Tone.Volume(0);
                return [volume1, volume2];
            case "kickfx2":
                var volume1 = new Tone.Volume(0);
                var volume2 = new Tone.Volume(0);
                return [volume1, volume2];
            case "snarefx1":
                var volume1 = new Tone.Volume(0);
                var volume2 = new Tone.Volume(0);
                return [volume1, volume2];
            case "snarefx2":
                var volume1 = new Tone.Volume(0);
                var volume2 = new Tone.Volume(0);
                return [volume1, volume2];
            case "hatfx1":
                var volume1 = new Tone.Volume(0);
                var volume2 = new Tone.Volume(0);
                return [volume1, volume2];
            case "hatfx2":
                var volume1 = new Tone.Volume(0);
                var volume2 = new Tone.Volume(0);
                return [volume1, volume2];
            }
    },
}

export { SynthFxLoader as default }