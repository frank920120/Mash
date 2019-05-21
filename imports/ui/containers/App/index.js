import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../../routes/Layout";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ParallaxProvider } from "react-scroll-parallax";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ParallaxProvider>
        <CssBaseline>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </CssBaseline>
      </ParallaxProvider>
    );
  }
}

export default App;
