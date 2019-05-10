import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../../component/routes/Layout";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
