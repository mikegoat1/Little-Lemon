import './App.css';
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js"
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Hero />
      </Main>
      <Footer />

    </>
  );
}

export default App;
