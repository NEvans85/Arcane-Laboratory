import React from "react";
import SiteNav from "./SiteNav/site_nav_container";
import SessionControl from "./SessionControl/session_control_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <this.homeButton />
        <SiteNav />
        <SessionControl />
      </div>
    );
  }

  homeButton() {
    // NOTE: figure out how to display image asset
    return <img src="%image_path" />;
  }
}

export default NavBar;
