import './App.css';

import React, { Component } from 'react';
import logo from './logo.svg';
import Tone from 'tone';

import { connect } from 'react-redux'
import { updateUser } from './actions/user-actions'

import MidiLoader from './MidiLoader'
import { updatePlayState } from './actions/playstate-actions';

var midiJson = {
  midiMel: null,
  midiHi: null,
  midiMid: null,
  midiLow: null,
};
 
class App extends Component {
  constructor(props){
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this) 
    this.onUpdatePlayState = this.onUpdatePlayState.bind(this) 
  }

  onUpdateUser() {
    console.log('do something')
    this.props.onUpdateUser("SAMddMY");
  }

  onUpdatePlayState() {
    console.log('update playstate')
    
    this.props.onUpdatePlayState(!this.props.playState);
  }

  render() {
    console.log(this.props)
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{}</h2>
        <div>DA FuCK
 
          <button onClick={this.onUpdatePlayState.bind(this)}>PLAY</button>



          {/* <button style={{background: this.state.color}} onClick={this.changeColor.bind(this)}>CHANGE COLOR</button>
          <button onClick={this.loadSynths}>LOAD SYNTHS</button>
    <button onClick={this.begin}>PLAY MUSIC</button> */}
        </div>

        <div onClick={this.onUpdateUser}>UPDATE USER</div>
        {this.props.user}<br />
        {'' + this.props.playState}
      </div>
    );
  }

  // begin(){

  //   console.log('STARTING!!!!!111')
  //   Tone.Transport.bpm.value =  100
  //   Tone.Transport.start("+0.1")
  //   console.log('FINISHED!!!!!111')
  // }
  
  // loadSynths() {
  
  //   console.log("PLAY 1")
    
  //   // *********************************************
  //   new Tone.Part(function(time, note) {


  //     // console.log("t1", time)
  //     var synth2 = new Tone.Synth().chain(Tone.Master)
      
  //     console.log(note)

  //     synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity) 
  //   }, midiJson.midiMel.tracks[0].notes).start(0)

  //   new Tone.Part(function(time, note) { 


  //     // console.log("t2", time)
  //     var synth2 = new Tone.PluckSynth().chain(Tone.Master) 
  //     synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity) 
  //   }, midiJson.midiHi.tracks[0].notes).start(0)

  //   // // *********************************************
  //   new Tone.Part(function(time, note) {  


  //     // console.log("t3", time)

  //     var synth2 = new Tone.Synth().chain(Tone.Master) 

  //     synth2.detune.value = synth2.detune.value-1200

  //     synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity) 
  //   }, midiJson.midiMid.tracks[0].notes).start(0)

  //   // // *********************************************
  //   new Tone.Part(function(time, note) {  
      
  //     // console.log("t4", time)
  //     var synth2 = new Tone.Synth().chain(Tone.Master)

  //     synth2.detune.value = synth2.detune.value-1200
  //     synth2.triggerAttackRelease(note.name, note.duration, time, note.velocity) 
  //   },  midiJson.midiLow.tracks[0].notes).start(0)


  //   console.log("PLAY 2 ..")
  
  //   return "my string"
  // }
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
