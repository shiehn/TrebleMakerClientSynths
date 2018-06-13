import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Tone from 'tone';
import MidiLoader from './MidiLoader'
import { updatePlayState } from './actions/playstate-actions';
import { switchPattern } from './actions/pattern-actions';
import { switchSynth } from './actions/synth-actions';
import { Button } from 'react-bootstrap';
import * as CONSTS from './consts';
import { bindActionCreators } from 'redux';

var midiJson = {
  midiMel: null,
  midiHi: null,
  midiMid: null,
  midiLow: null,
};
 
class App extends Component {
    constructor(props){
      super(props);
      this.state = { width: 0, height: 0 };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

      MidiLoader.loadMidi(midiJson);
    }

  componentDidMount() {
    console.log('didmount')
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    console.log('willmount')
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    console.log('updateDims')
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onUpdateUser() {
    console.log('do something')
    this.props.onUpdateUser("SAMddMY");
  }

  onUpdatePlayState() {
    console.log('update playstate')
    this.props.onUpdatePlayState(!this.props.playState);

    this.begin();
  }

  getSelectedPattern(pattern){
    for (var i = 0; i < pattern.length; i++) {
        if(pattern[i].selected == true){
          console.log('selected', pattern)
          return pattern[i];
        }
    }
  }

  render() { 

    return (
      <div className="pageWrapper">
        <div style={{width: this.state.width, height: this.state.height*0.8}}>
        <div className="btnRow">
          <span className="btnSpan">
            <Button bsStyle="primary" className="notesBtn" onClick={() => this.props.switchPattern(CONSTS.MELODY_PATTERN, this.props.melodyPattern)}>{
              this.getSelectedPattern(this.props.melodyPattern).name + ''
            }</Button>          
            <Button bsStyle="primary" className="synthBtn" onClick={() => this.props.switchSynth(CONSTS.MELODY_SYNTH, this.props.melodySynths)}>
              {this.getSelectedPattern(this.props.melodySynths).name + 'MELODY SyNTH'}
            </Button>          
            <Button bsStyle="primary"className="fxBtn">Melody FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary" className="notesBtn" onClick={() => this.props.switchPattern(CONSTS.HI_PATTERN, this.props.hiPattern)}>{
                this.getSelectedPattern(this.props.hiPattern).selected + 'Hi Notes'
            }</Button>          
          <Button bsStyle="primary"className="synthBtn" onClick={() => this.props.switchSynth(CONSTS.HI_SYNTH, this.props.hiSynths)}>
              {this.getSelectedPattern(this.props.hiSynths).name + 'Hi Synth'}
          </Button>          
          <Button bsStyle="primary"className="fxBtn">Hi FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.MID_PATTERN, this.props.midPattern,e)}>{
              this.getSelectedPattern(this.props.midPattern).selected + 'Mid Notes'
            }</Button>        
          <Button bsStyle="primary"className="synthBtn" onClick={() => this.props.switchSynth(CONSTS.MID_SYNTH, this.props.midSynths)} >
            {this.getSelectedPattern(this.props.midSynths).name + 'Mid Synth'}
          </Button>          
          <Button bsStyle="primary"className="fxBtn">Mid FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.LOW_PATTERN, this.props.lowPattern, e)}>{
              this.getSelectedPattern(this.props.lowPattern).selected + 'Low Notes'
            }</Button>          
          <Button bsStyle="primary"className="synthBtn" onClick={() => this.props.switchSynth(CONSTS.LOW_SYNTH, this.props.lowSynths)} >
          {this.getSelectedPattern(this.props.lowSynths).name + 'Low Synth'}
          </Button>          
          <Button bsStyle="primary"className="fxBtn">Low FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.KICK_PATTERN, this.props.kickPattern, e)}>{
              this.getSelectedPattern(this.props.kickPattern).selected + 'Kick Pattern'
            }</Button>       
          <Button bsStyle="primary"className="synthBtn" onClick={() => this.props.switchSynth(CONSTS.KICK_SYNTH, this.props.kickSynths)} >
            {this.getSelectedPattern(this.props.kickSynths).name + 'KICK Synth'}
          </Button>          
          <Button bsStyle="primary"className="fxBtn">Hats FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.SNARE_PATTERN, this.props.snarePattern, e)}>{
              this.getSelectedPattern(this.props.snarePattern).selected + 'Snare Pattern'
            }</Button>         
          <Button bsStyle="primary"className="synthBtn" onClick={() => this.props.switchSynth(CONSTS.SNARE_SYNTH, this.props.snareSynths)} >
            {this.getSelectedPattern(this.props.snareSynths).name + 'SNARE Synth'}
          </Button>          
          <Button bsStyle="primary" className="fxBtn">Snare FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary" className="notesBtn" onClick={(e) => this.props.switchPattern(CONSTS.HAT_PATTERN, this.props.hatPattern, e)}>{
              this.getSelectedPattern(this.props.hatPattern).selected + 'Hat Pattern'
            }</Button>            
          <Button bsStyle="primary"className="synthBtn" onClick={() => this.props.switchSynth(CONSTS.HAT_SYNTH, this.props.hatSynths)} >
          {this.getSelectedPattern(this.props.hatSynths).name + 'HAT Synth'}
          </Button>          
          <Button bsStyle="primary"className="fxBtn">Kick FX</Button>          
          </span>
        </div>  
      </div>
      <div className="playControlls" style={{width: this.state.width, height: this.state.height*0.2}}>
        <span className="payControllsRow">
        <Button bsStyle="primary"className="playBtn" onClick={this.onUpdatePlayState.bind(this)}>PLAY</Button>
        <Button bsStyle="primary"className="refreshBtn" onClick={this.loadSynths}>REFRESH</Button>
        </span>
      </div>
</div>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <h2>{}</h2>
    //     <div>DA FuCK
 
    //       <button onClick={this.onUpdatePlayState.bind(this)}>PLAY</button>



    //       {/* <button style={{background: this.state.color}} onClick={this.changeColor.bind(this)}>CHANGE COLOR</button>
    //       <button onClick={this.loadSynths}>LOAD SYNTHS</button>
    // <button onClick={this.begin}>PLAY MUSIC</button> */}
    //     </div>

    //     <div onClick={this.onUpdateUser}>UPDATE USER</div>
    //     {this.props.user}<br />
    //     {'' + this.props.playState}
    //   </div>
    );

  }

  begin(){

    console.log('STARTING!!!!!111')
    Tone.Transport.bpm.value =  100
    Tone.Transport.start("+0.1")
    console.log('FINISHED!!!!!111')
  }
  
  loadSynths() {
  
    console.log("PLAY 1")
    
    // *********************************************
    new Tone.Part(function(time, note) {


      // console.log("t1", time)
      var synth2 = new Tone.Synth().chain(Tone.Master)
      
      console.log(note)

      synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity) 
    }, midiJson.midiMel.tracks[0].notes).start(0)

    new Tone.Part(function(time, note) { 


      // console.log("t2", time)
      var synth2 = new Tone.PluckSynth().chain(Tone.Master) 
      synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity) 
    }, midiJson.midiHi.tracks[0].notes).start(0)

    // // *********************************************
    new Tone.Part(function(time, note) {  


      // console.log("t3", time)

      var synth2 = new Tone.Synth().chain(Tone.Master) 

      synth2.detune.value = synth2.detune.value-1200

      synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity) 
    }, midiJson.midiMid.tracks[0].notes).start(0)

    // // *********************************************
    new Tone.Part(function(time, note) {  
      
      // console.log("t4", time)
      var synth2 = new Tone.Synth().chain(Tone.Master)

      synth2.detune.value = synth2.detune.value-1200
      synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity) 
    },  midiJson.midiLow.tracks[0].notes).start(0)

    console.log("PLAY 2 ..")
  
    return "my string"
  }
}

const mapStateToProps = (state) => {
  return {
    // products: state.products,
    // user: state.user,
    playState: state.playState,
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
  };
};

const mapDispatchToProps = (dispatch) => { 
    return bindActionCreators({
      onUpdatePlayState: updatePlayState,
      switchPattern: switchPattern,
      switchSynth: switchSynth,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
