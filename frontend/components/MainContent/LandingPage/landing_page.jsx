import React from "react";
import Splash from "./Splash/splash_container";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing-page">
        <Splash />
      </div>
    );
  }
}

export default LandingPage;
