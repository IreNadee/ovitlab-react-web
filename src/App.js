import React from "react";
import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
