import "./App.scss";

import * as React from "react";

// tslint:disable:no-var-requires
const logo = require("./logo.svg");

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
        </header>
        <p className="intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
