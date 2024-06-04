import './App.css';
import * as React from "react"
import { ChakraProvider } from '@chakra-ui/react';

import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js"
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Special from './components/Specials.js';
import Testimonials from './components/Testimonials.js';
import About from './components/About.js';
import BookingPage from "./components/BookingPage.js"
import BookingForm from "./components/BookingForm.js"
import { Routes, Route } from "react-router-dom"
import ConfirmedBooking from './components/ConfimredBooking.js';




function App() {
  return (
    <>
      <ChakraProvider>
        <Header>
          <Nav />
        </Header>
        <Main>
          <Routes>
            <Route path='/' element={
              <>
                <Hero />
                <Special />
                <Testimonials />
                <About />
              </>
            }
            ></Route>
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={
              <>
                <BookingPage>
                  <BookingForm />
                </BookingPage>
              </>

            }
            ></Route>
            <Route path="/confirmationBooking" element={<ConfirmedBooking/>}/>


            {/* <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order_online" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} /> */}
          </Routes>
        </Main>
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default App;
