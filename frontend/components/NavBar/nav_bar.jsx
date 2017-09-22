import React from "react";
import SiteNav from "./SiteNav/site_nav_container";
import SessionControl from "./SessionControl/session_control_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <img
        className="site-logo"
        src="http://res.cloudinary.com/arcane-lab/image/upload/v1506018405/SiteLogo_gqlnav.png"
      />
    );
  }
}

export default NavBar;
