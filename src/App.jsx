import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Breadcrumbs from "./components/bread";
import Heading from "./components/heading";
import Menu from "./components/menubar";
import Box from "./components/box";
import Controls from "./components/controls";
import Faq from "./components/faq";
import Drops from "./components/drops";
import Create from "./components/create";

function App() {
  
  return (
    <div className="mb-72">
      <Header />
      <Breadcrumbs />

      <Heading />
      <Menu />

      <div className="flex w-full flex-col justify-center align-middle items-center">
        <Box exp="9x-2y+3z=4" />
        <Controls />
      </div>
      <Create />
      <Faq />
      <Drops content="Can education flashcards be used for all age groups?" />
      <Drops content="How do education flashcards work?" />
      <Drops content="Can education flashcards be used for test preparation?" />
    </div>
  );
}

export default App;
