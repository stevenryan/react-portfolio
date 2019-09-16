import React, { Component } from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Toolbar from './Components/Toolbar/Toolbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import HomeVideo from './Components/Section/HomeVideo/HomeVideo';
import About from './Components/Section/About/About';

library.add(fab, fas)

class App extends Component {
  state = {
    sidebarOpen: false,
  };

  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sidebarOpen: false});
  };

  letterAnimationHandler = () => {
    this.remove
  };

  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        <Toolbar sidebarClickHandler={this.sidebarToggleClickHandler} />
        <Sidebar show={this.state.sidebarOpen} />
        {backdrop}
        <main style={{zIndex: '1'}}>
          <HomeVideo />
          <About />
        </main>
      </div>
    );
  }
}

export default App;
