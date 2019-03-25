import React, { Component } from "react";
import Routes from "./routes";

import GlobalStyle from "./globalStyle";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Routes />
      </div>
    );
  }
}

export default App;
