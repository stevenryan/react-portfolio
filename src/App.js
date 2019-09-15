import React, { Component } from 'react';
import './App.css';

import Toolbar from './Components/Toolbar/Toolbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import HomeVideo from './Components/Section/HomeVideo/HomeVideo';

class App extends Component {
  state = {
    sidebarOpen: false
  };

  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sidebarOpen: false});
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
        </main>
      </div>
    );
  }
}

export default App;
