// import logo from './logo.svg';
import React, { Component } from 'react';
import Head from './head';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 0,
      windowWidthValue: window.innerWidth
    };
    window.addEventListener('resize', () => { this.setState({ windowWidthValue: window.innerWidth }) })
  }
  selectHandle(id) {
    this.setState({ select: id })
    // alert(id);
  }
  render() {
    const { select } = this.state;
    return (
      <div className="App">
        <Head windowWidthValue={this.state.windowWidthValue}/>
      </div >
    );
  }
}
export default App;
