import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';
import MidiLoader from './midi-loader'
import { updatePlayState } from './actions/playstate-actions';
import { updateShowVideo } from './actions/showvideo-actions';
import { updateShowLoading } from './actions/showloading-actions';
import { switchPattern } from './actions/pattern-actions';
import { switchSynth } from './actions/synth-actions';
import { switchFx } from './actions/fx-actions';
import * as CONSTS from './consts';
import { bindActionCreators } from 'redux';
import SynthLoader from './synth-loader';
import StateExtractor from './state-extractor';
import { Button } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';

var midiJson = {
  midiMel: null,
  midiHi: null,
  midiMid: null,
  midiLow: null,
  midiKick: null,
  midiSnare: null,
  midiHat: null,
};

var SERVER_ENDPOINT = 'xoxoxoxoxoxoxoxoxoxoxo';
var CDN = 'yoyoyoyoyoyoyoyoyoyoyo';

var TRACK = { 
  id: '',
  selectedMelody: null, 
  bpm: 0 
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0, 
      value: '',
      copied: false, 
      trackId: 'Track Id',
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.onCopy = this.updateWindowDimensions.bind(this);
    this.onChange = this.updateWindowDimensions.bind(this);
    this.reloadMidi();
  }

  updateTrackId = () => {
    console.log('WAS CALLED!!')
    this.setState({ width: window.innerWidth, trackId: TRACK.id, copied: false });
  }

  reloadMidi() {
    MidiLoader.getTrackId(SERVER_ENDPOINT, TRACK, midiJson, this.updateTrackId);  
    this.setState({ width: window.innerWidth, trackId: TRACK.id });
    setTimeout(this.onUpdateShowLoading, 2000, this, false)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() { 
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onUpdateUser() {
    this.props.onUpdateUser("SAMddMY");
  }

  onUpdatePlayState() {
    this.props.onUpdatePlayState(!this.props.playState);
    this.begin();
  }

  onUpdateShowVideo() {
    this.props.onUpdateShowVideo(!this.props.showVideo);
  }

  onUpdateShowLoading(context, showLoading) {
    context.props.onUpdateShowLoading(showLoading);
  }

  onDownLoadTar() {
    window.location.href = CDN + TRACK.id + '.tar';
  }
 
  render() {
    return (
      <div>
        <main> 
          <div id='title_wrapper'>TrebleMaker.ai</div>
          <div id='sub_title_wrapper'>
            <div id='sub_title'>
              <span style={{'background-color': 'rgba(51, 170, 51, .2)', 'color': 'black'}}>ROYALTY-FREE</span> midi chords, <br />
              arpeggios, basslines, <br />
              beats & melodies
         </div>
          </div>
          <div id='audio-wrapper' >
            <audio controls preload="metadata" id='audio-tag' style={{ 'display': 'none' }} >
              <source src="" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div class='track-id-outer-wrapper'>
              <CopyToClipboard text={this.state.trackId} onCopy={() => this.setState({copied: true})}> 
                <span class='track-id-wrapper'>  
                  <span class='track-id-txt' value={this.state.trackId} onChange={({target: {value}}) => this.setState({value, copied: false})}>
                  <i class="fas fa-copy control_btns download-btn"></i> 
                  
                  {this.state.copied ? 'Copied to Clipboard' : 'TRACK ID: ' + this.state.trackId} 
                </span> 
              </span>
              </CopyToClipboard>
            </div>

            <div id='refresh-btn-wrapper' >
              <div id='btn-border' style={this.props.showLoading ? { display: 'none' } : { display: '' }} >
                <span>
                  <i class="fas fa-play control_btns play-btn" onClick={(e) => this.stopAndReloadSynths()}></i>
                </span>
                <span>
                  <i class="fas fa-stop control_btns stop-btn" onClick={(e) => this.stopIt()}></i>
                </span>
                <span>
                  <i class="fas fa-random control_btns" onClick={(e) => this.stopRefreshAndLoadSynths()}></i>
                </span>
                <span>
                  <i class="fas fa-download control_btns download-btn" onClick={(e) => this.onDownLoadTar()}></i>
                </span>  
              </div> 

              <div id='loading-screen' style={this.props.showLoading ? { display: '' } : { display: 'none' }}>
                <div id='loading-centre'>
                  <img src='/loading.svg' />
                </div>
              </div>
            </div >

            <div id='plugin-wrapper'>  
              <div id='plugin-inner-wrapper'> 
                <img id="plugin-icon" src="logo.jpg">
                </img>  
                <div id="plugin-text"> 
                  <p>
                    Download TrebleMaker<br/>
                    Reaper extensions for <br/>
                  </p>
                  <p>
                    <a href="https://s3-us-west-2.amazonaws.com/treblemakerdeps/reaper-win64.msi" target="_blank">
                      WINDOWS & MAC
                    </a> 
                  </p>
                </div>
              </div>
            </div>
            
            
            
            <div id='demo-wrapper'> 
              <span id='info-txt'>Demos created with TrebleMaker:</span><br /><br />  
              <iframe width="50%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/519519909&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </div>
            
            <div id='info-wrapper' class='info_btns' style={this.props.showVideo ? { display: 'none' } : { display: '' }} onClick={(e) => { this.onUpdateShowVideo() }}>
              <i class="fas fa-info-circle info_btns"></i>
              <span id='info-txt'>What is this?</span>
            </div >

            <div id='info-wrapper' class='info_btns' style={this.props.showVideo ? { display: '' } : { display: 'none' }}>
              <a href="https://medium.com/@stevehiehn/how-might-daws-integrate-ai-ml-e08a8f026b5f" target="_blank">
                <i class="fas fa-info-circle info_btns"></i>
                <span id='info-txt'>How does this work?</span>
              </a>
            </div >

            <video id='video-wrapper' style={this.props.showVideo ? { display: '' } : { display: 'none' }} controls >
              <source src="https://s3-us-west-2.amazonaws.com/songseeds/treblemaker-instruction.mp4" type="video/mp4" />
              Your browser does not support the video tag.
  </video>
          </div >
        </main >

        <footer>
        </footer>
      </div >);
    //<div className="pageWrapper">
    //   <div style={{ width: this.state.width, height: this.state.height * 0.8 }}>

    //     <div className="btnRow">
    //       <span className="btnSpan">
    //         <Button bsStyle="primary" className="notesBtn" onClick={() => this.props.switchPattern(CONSTS.MELODY_PATTERN, this.props.melodyPattern)}>{
    //           StateExtractor.getSelectedPattern(this.props.melodyPattern).name + ''
    //         }</Button>
    //         <Button bsStyle="primary" className="synthBtn" onClick={() => {
    //           this.props.switchSynth(CONSTS.MELODY_SYNTH, this.props.melodySynths)
    //           this.stopAndReloadSynths()
    //         }}>
    //           {StateExtractor.getSelectedPattern(this.props.melodySynths).name + 'MELODY SyNTH'}
    //         </Button>
    //         <Button bsStyle="primary" className="fxBtn" onClick={() => {
    //           this.props.switchFx(CONSTS.MELODY_FX, this.props.melodyFx)
    //           this.stopAndReloadSynths()
    //         }}>
    //           {StateExtractor.getSelectedPattern(this.props.melodyFx).name + 'MELODY FX'}
    //         </Button>
    //       </span>
    //     </div>

    //     <div className="btnRow">
    //       <span className="btnSpan">
    //         <Button bsStyle="primary" className="notesBtn" onClick={() => {this.props.switchPattern(CONSTS.HI_PATTERN, this.props.hiPattern)}>{
    //           StateExtractor.getSelectedPattern(this.props.hiPattern).selected + 'Hi Notes'
    //         }</Button>
    //         <Button bsStyle="primary" className="synthBtn" onClick={() => {
    //           this.props.switchSynth(CONSTS.HI_SYNTH, this.props.hiSynths)
    //           this.stopAndReloadSynths()
    //         }}>
    //           {StateExtractor.getSelectedPattern(this.props.hiSynths).name + 'Hi Synth'}
    //         </Button>
    //         <Button bsStyle="primary" className="fxBtn" onClick={() => {
    //           this.props.switchFx(CONSTS.HI_FX, this.props.hiFx)
    //           this.stopAndReloadSynths()
    //         }}>
    //           {StateExtractor.getSelectedPattern(this.props.hiFx).name + 'HI FX'}
    //         </Button>
    //       </span>
    //     </div>

    //     <div className="btnRow">
    //       <span className="btnSpan">
    //         <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.MID_PATTERN, this.props.midPattern, e)}>{
    //           StateExtractor.getSelectedPattern(this.props.midPattern).selected + 'Mid Notes'
    //         }</Button>
    //         <Button bsStyle="primary" className="synthBtn" onClick={() => {
    //           this.props.switchSynth(CONSTS.MID_SYNTH, this.props.midSynths)
    //           this.stopAndReloadSynths()
    //         }} >
    //           {StateExtractor.getSelectedPattern(this.props.midSynths).name + 'Mid Synth'}
    //         </Button>
    //         <Button bsStyle="primary" className="fxBtn" onClick={() => {
    //           this.props.switchFx(CONSTS.MID_FX, this.props.midFx)
    //           this.stopAndReloadSynths()
    //         }}>
    //           {StateExtractor.getSelectedPattern(this.props.midFx).name + 'MID FX'}
    //         </Button>
    //       </span>
    //     </div>

    //     <div className="btnRow">
    //       <span className="btnSpan">
    //         <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.LOW_PATTERN, this.props.lowPattern, e)}>{
    //           StateExtractor.getSelectedPattern(this.props.lowPattern).selected + 'Low Notes'
    //         }</Button>
    //         <Button bsStyle="primary" className="synthBtn" onClick={() => {
    //           this.props.switchSynth(CONSTS.LOW_SYNTH, this.props.lowSynths)
    //           this.stopAndReloadSynths()
    //         }} >
    //           {StateExtractor.getSelectedPattern(this.props.lowSynths).name + 'Low Synth'}
    //         </Button>
    //         <Button bsStyle="primary" className="fxBtn" onClick={() => {
    //           this.props.switchFx(CONSTS.LOW_FX, this.props.lowFx)
    //           this.stopAndReloadSynths()
    //         }}>
    //           {StateExtractor.getSelectedPattern(this.props.lowFx).name + 'LOW FX'}
    //         </Button>
    //       </span>
    //     </div>

    //     <div className="btnRow">
    //       <span className="btnSpan">
    //         <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.KICK_PATTERN, this.props.kickPattern, e)}>{
    //           StateExtractor.getSelectedPattern(this.props.kickPattern).selected + 'Kick Pattern'
    //         }</Button>
    //         <Button bsStyle="primary" className="synthBtn" onClick={() => {
    //           this.props.switchSynth(CONSTS.KICK_SYNTH, this.props.kickSynths)
    //           this.stopAndReloadSynths()
    //         }} >
    //           {StateExtractor.getSelectedPattern(this.props.kickSynths).name + 'KICK Synth'}
    //         </Button>
    //         <Button bsStyle="primary" className="fxBtn" onClick={() => {
    //           this.props.switchFx(CONSTS.KICK_FX, this.props.kickFx)
    //           this.stopAndReloadSynths()
    //         }}>
    //           {StateExtractor.getSelectedPattern(this.props.kickFx).name + 'KICK FX'}
    //         </Button>
    //       </span>
    //     </div>

    //     <div className="btnRow">
    //       <span className="btnSpan">
    //         <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.SNARE_PATTERN, this.props.snarePattern, e)}>{
    //           StateExtractor.getSelectedPattern(this.props.snarePattern).selected + 'Snare Pattern'
    //         }</Button>
    //         <Button bsStyle="primary" className="synthBtn" onClick={() => {
    //           this.props.switchSynth(CONSTS.SNARE_SYNTH, this.props.snareSynths)
    //           this.stopAndReloadSynths()
    //         }} >
    //           {StateExtractor.getSelectedPattern(this.props.snareSynths).name + 'SNARE Synth'}
    //         </Button>
    //         <Button bsStyle="primary" className="fxBtn" onClick={() => {
    //           this.props.switchFx(CONSTS.SNARE_FX, this.props.snareFx)
    //           this.stopAndReloadSynths()
    //         }}>
    //           {StateExtractor.getSelectedPattern(this.props.snareFx).name + 'SNARE FX'}
    //         </Button>
    //       </span>
    //     </div>

    //     <div className="btnRow">
    //       <span className="btnSpan">
    //         <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.HAT_PATTERN, this.props.hatPattern, e)}>{
    //           StateExtractor.getSelectedPattern(this.props.hatPattern).selected + 'Hat Pattern'
    //         }</Button>
    //         <Button bsStyle="primary" className="synthBtn" onClick={() => {
    //           this.props.switchSynth(CONSTS.HAT_SYNTH, this.props.hatSynths)
    //           this.stopAndReloadSynths()
    //         }} >
    //           {StateExtractor.getSelectedPattern(this.props.hatSynths).name + 'HAT Synth'}
    //         </Button>
    //         <Button bsStyle="primary" className="fxBtn" onClick={() => {
    //           this.props.switchFx(CONSTS.HAT_FX, this.props.hatFx)
    //           this.stopAndReloadSynths()
    //         }}>
    //           {StateExtractor.getSelectedPattern(this.props.hatFx).name + 'HAT FX'}
    //         </Button>
    //       </span>
    //     </div>
    //   </div>

    //   <div className="playControlls" style={{ width: this.state.width, height: this.state.height * 0.2 }}>
    //     <span className="payControllsRow">
    //       <Button bsStyle="primary" className="playBtn" onClick={this.onUpdatePlayState.bind(this)}>PLAY</Button>
    //       <Button bsStyle="primary" className="playBtn" onClick={() => { this.stopIt() }}>STOP</Button>
    //       <Button bsStyle="primary" className="refreshBtn">REFRESH</Button>
    //     </span>
    //   </div>
    //</div>
    //);
  }

  stopIt() {
    Tone.Transport.stop();
  }

  begin() {
    Tone.Transport.start()
  }

  stopRefreshAndLoadSynths() {
    this.props.onUpdateShowLoading(true);
    this.stopIt();
    this.reloadMidi();
  }

  randomizeSynthsAndFx(){
    if (Math.random() >= 0.5) {
      this.props.switchSynth(CONSTS.MELODY_SYNTH, this.props.melodySynths)
    }

    if (Math.random() >= 0.5) {
      this.props.switchFx(CONSTS.MELODY_FX, this.props.melodyFx)
    }
    if (Math.random() >= 0.5) {
      this.props.switchSynth(CONSTS.HI_SYNTH, this.props.hiSynths)
    }
    if (Math.random() >= 0.5) {
      this.props.switchFx(CONSTS.HI_FX, this.props.hiFx)
    }
    if (Math.random() >= 0.5) {
      this.props.switchSynth(CONSTS.MID_SYNTH, this.props.midSynths)
    }
    if (Math.random() >= 0.5) {
      this.props.switchFx(CONSTS.MID_FX, this.props.midFx)
    }
    if (Math.random() >= 0.5) {
      this.props.switchSynth(CONSTS.LOW_SYNTH, this.props.lowSynths)
    }
    if (Math.random() >= 0.5) {
      this.props.switchFx(CONSTS.LOW_FX, this.props.lowFx)
    }
  }

  stopAndReloadSynths() {
    Tone.Transport.bpm.value = 120

    if (!TRACK.id) {
      this.reloadMidi();
    }

    this.stopIt();
    if (SynthLoader.mel) {
      SynthLoader.mel.dispose();
    }

    if (SynthLoader.hi) {
      SynthLoader.hi.dispose();
    }

    if (SynthLoader.mid) {
      SynthLoader.mid.dispose();
    }
    if (SynthLoader.low) {
      SynthLoader.low.dispose();
    }
    if (SynthLoader.kick) {
      SynthLoader.kick.dispose();
    }
    if (SynthLoader.snare) {
      SynthLoader.snare.dispose();
    }
    if (SynthLoader.hat) {
      SynthLoader.hat.dispose();
    }

    this.randomizeSynthsAndFx();
    
    SynthLoader.load(CONSTS.SYNTH_TYPE_MEL,
      StateExtractor.getSelectedSynth(CONSTS.SYNTH_TYPE_MEL, this.props.melodySynths).name,
      StateExtractor.getSelectedSynthFx(this.props.melodyFx).name,
      TRACK.bpm,
      midiJson)
    SynthLoader.load(CONSTS.SYNTH_TYPE_HI,
      StateExtractor.getSelectedSynth(CONSTS.SYNTH_TYPE_HI, this.props.hiSynths).name,
      StateExtractor.getSelectedSynthFx(this.props.hiFx).name,
      TRACK.bpm,
      midiJson)
    SynthLoader.load(CONSTS.SYNTH_TYPE_MID,
      StateExtractor.getSelectedSynth(CONSTS.SYNTH_TYPE_MID, this.props.midSynths).name,
      StateExtractor.getSelectedSynthFx(this.props.midFx).name,
      TRACK.bpm,
      midiJson)
    SynthLoader.load(CONSTS.SYNTH_TYPE_LOW,
      StateExtractor.getSelectedSynth(CONSTS.SYNTH_TYPE_LOW, this.props.lowSynths).name,
      StateExtractor.getSelectedSynthFx(this.props.lowFx).name,
      TRACK.bpm,
      midiJson)
    SynthLoader.load(CONSTS.SYNTH_TYPE_KICK,
      StateExtractor.getSelectedSynth(CONSTS.SYNTH_TYPE_KICK, this.props.kickSynths).name,
      StateExtractor.getSelectedSynthFx(this.props.kickFx).name,
      TRACK.bpm,
      midiJson)
    SynthLoader.load(CONSTS.SYNTH_TYPE_SNARE,
      StateExtractor.getSelectedSynth(CONSTS.SYNTH_TYPE_SNARE, this.props.snareSynths).name,
      StateExtractor.getSelectedSynthFx(this.props.snareFx).name,
      TRACK.bpm,
      midiJson)
    SynthLoader.load(CONSTS.SYNTH_TYPE_HAT,
      StateExtractor.getSelectedSynth(CONSTS.SYNTH_TYPE_HAT, this.props.hatSynths).name,
      StateExtractor.getSelectedSynthFx(this.props.hatFx).name,
      TRACK.bpm,
      midiJson)

    //Tone.Transport.bpm.value = TRACK.bpm
    Tone.context.latencyHint = 'playback'
    SynthLoader.startAll();
 
    this.begin();  
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state.products,
    // user: state.user,
    playState: state.playState,
    showVideo: state.showVideo,
    showLoading: state.showLoading, 
    melodyPattern: state.melodyPattern,
    hiPattern: state.hiPattern,
    midPattern: state.midPattern,
    lowPattern: state.lowPattern,
    kickPattern: state.kickPattern,
    snarePattern: state.snarePattern,
    hatPattern: state.hatPattern,

    melodySynths: state.melodySynths,
    hiSynths: state.hiSynths,
    midSynths: state.midSynths,
    lowSynths: state.lowSynths,
    kickSynths: state.kickSynths,
    snareSynths: state.snareSynths,
    hatSynths: state.hatSynths,

    melodyFx: state.melodyFx,
    hiFx: state.hiFx,
    midFx: state.midFx,
    lowFx: state.lowFx,
    kickFx: state.kickFx,
    snareFx: state.snareFx,
    hatFx: state.hatFx,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onUpdatePlayState: updatePlayState,
    onUpdateShowVideo: updateShowVideo,
    onUpdateShowLoading: updateShowLoading,
    switchPattern: switchPattern,
    switchSynth: switchSynth,
    switchFx: switchFx,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
