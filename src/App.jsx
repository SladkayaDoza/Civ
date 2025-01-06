import {Content, Header} from "./components/index.js";
import {Footer, GameBoard} from "./components/index.js";
import React from "react";

function App() {
  return (
    <Content>
      <Header />
      <GameBoard />
      <Footer />
    </Content>
  )
}

export default App
