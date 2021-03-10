import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/Blog1";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
