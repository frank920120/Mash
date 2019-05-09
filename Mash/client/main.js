import React from "react";
import ReactDOM from "react-dom";
import App from "../imports/ui/containers/App";
import "./main.css";
import "./main.html";
import * as serviceWorker from "./serviceWorker";
import { Meteor } from "meteor/meteor";
Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App />, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
