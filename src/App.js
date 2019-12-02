import React from "react";
import "./App.css";
import CheckInContainer1 from "./pages/ChekIn1/CheckInContainer1";
import CheckInContainer2 from "./pages/ChekIn2/CheckInContainer2";
import CheckInContainer3 from "./pages/ChekIn3/CheckInContainer3";
import Success from "./pages/Success/Success";
import Scheme from "./components/Scheme/Scheme";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app-wrapper">
      <div className="yellow">
        <div className="red"></div>
        <div className="green"></div>
      </div>
      <div className="app-wrapper-content">
        <Scheme />
        <div>
          <Route
            exact
            path="/"
            render={props => <CheckInContainer1 {...props} />}
          />
          <Route
            path="/step2"
            render={props => <CheckInContainer2 {...props} />}
          />
          <Route
            path="/step3"
            render={props => <CheckInContainer3 {...props} />}
          />
          <Route path="/success" render={props => <Success {...props} />} />
        </div>
        <div className="yellowLeft">
          <div className="redLeft"></div>
        </div>
        <div className="yellowRight">
          <div className="greenRight"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
