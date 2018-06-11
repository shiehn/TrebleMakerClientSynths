import './App.css';

import React, { Component } from 'react';
import logo from './logo.svg';
import Tone from 'tone';

import { connect } from 'react-redux'
import { updateUser } from './actions/user-actions'

import MidiLoader from './MidiLoader'
import { updatePlayState } from './actions/playstate-actions';

import { Button } from 'react-bootstrap';

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

      this.onUpdateUser = this.onUpdateUser.bind(this);
      this.onUpdatePlayState = this.onUpdatePlayState.bind(this); 
  
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

  render() {
    console.log(this.props)
    return (
      <div className="pageWrapper">
        <div style={{width: this.state.width, height: this.state.height*0.8}}>
        <div className="btnRow">
          <span className="btnSpan">
            <Button bsStyle="primary" className="notesBtn">Melody Notes</Button>          
            <Button bsStyle="primary" className="synthBtn">Melody Synth</Button>          
            <Button bsStyle="primary"className="fxBtn">Melody FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary"className="notesBtn">Hi Notes</Button>          
          <Button bsStyle="primary"className="synthBtn">Hi Synth</Button>          
          <Button bsStyle="primary"className="fxBtn">Hi FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary"className="notesBtn">Mid Notes</Button>          
          <Button bsStyle="primary"className="synthBtn">Mid Synth</Button>          
          <Button bsStyle="primary"className="fxBtn">Mid FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary"className="notesBtn">Low Notes</Button>          
          <Button bsStyle="primary"className="synthBtn">Low Synth</Button>          
          <Button bsStyle="primary"className="fxBtn">Low FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary"className="notesBtn">Hats Pattern</Button>          
          <Button bsStyle="primary"className="synthBtn">Hats Sample</Button>          
          <Button bsStyle="primary"className="fxBtn">Hats FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary"className="notesBtn">Snare Pattern</Button>          
          <Button bsStyle="primary"className="synthBtn">Snare Sample</Button>          
          <Button bsStyle="primary" className="fxBtn">Snare FX</Button>          
          </span>
        </div>  
        <div className="btnRow">
          <span className="btnSpan">
          <Button bsStyle="primary"className="notesBtn">Kick Pattern</Button>          
          <Button bsStyle="primary"className="synthBtn">Kick Sample</Button>          
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
    products: state.products,
    user: state.user,
    playState: state.playState,
  };
};

const mapDispatchToProps = { 
    onUpdateUser: updateUser,
    onUpdatePlayState: updatePlayState 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
