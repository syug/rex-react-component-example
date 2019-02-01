import React, { Component } from 'react';
// import './App.css';

// TODO: Not working, need type definition file
// import RexButton from 'rex-button';

/* tslint:disable-next-line */
const RexIcons = require('rex-icons').default;
/* tslint:disable-next-line */
const RexButton = require('rex-button').default;

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <RexIcons name="share-f" />
        </header>
      </div>
    );
  }
}

export default App;
