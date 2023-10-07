import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Cover from './components/Cover'; // Import the Cover component
import Contact from './components/Contact';
import About from './components/About';
import GithubPROJ from './components/GithubPROJ';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Cover />} /> {/* Set the Cover component as the root route */}
        <Route path="/home" element={<Home />} />
        <Route path ="/contact" element={<Contact />} />
        <Route path ="/about" element={<About />} />
        <Route path = "/github" element={ <GithubPROJ/>}></Route >
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
