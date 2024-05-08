import './App.css';
import * as React from "react"
import { ChakraProvider } from '@chakra-ui/react';
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js"
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";

function App() {
  return (
    <>
      <ChakraProvider>
        <Header>
          <Nav />
        </Header>
        <Main>
          <Hero />
        </Main>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
