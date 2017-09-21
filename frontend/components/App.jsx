import React from "react";
import SessionForm from "./MainContent/Session/session_form_container";
import NavBar from "./NavBar/nav_bar_container";
// import Footer from "./Footer/footer_container";
import { Route } from "react-router-dom";

const App = () => (
  <div className="body_root">
    <header>
      <Route path="/" component={NavBar} />
    </header>
    <div className="maincontent">
      <Route path="/login" component={SessionForm} />
      <Route path="/signup" component={SessionForm} />
    </div>
    <footer>
      <p>Temporary footer</p>
    </footer>
  </div>
);

export default App;
