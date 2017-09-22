import React from "react";
import SessionForm from "./MainContent/Session/session_form_container";
import NavBar from "./NavBar/nav_bar_container";
import Footer from "./Footer/footer_container";
import { Route } from "react-router-dom";
import CardSearch from "./MainContent/CardSearch/card_search_container";

const App = () => (
  <div className="body_root">
    <header>
      <Route path="/" component={NavBar} />
    </header>
    <div className="maincontent">
      <Route path="/login" component={SessionForm} />
      <Route path="/signup" component={SessionForm} />
      <Route path="/cards" component={CardSearch} />
    </div>
    <footer>
      <Route path="/" component={Footer} />
    </footer>
  </div>
);

export default App;
