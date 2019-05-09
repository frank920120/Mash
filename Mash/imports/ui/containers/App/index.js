import React, { Component, Fragment } from "react";
import LandingPageContainer from "../../pages/LangingPage";
import Menu from "../../component/menu";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Menu />
        <LandingPageContainer />
      </Fragment>
    );
  }
}

export default App;
