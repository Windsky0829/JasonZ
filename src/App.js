import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Project } from './components/Project';
import React, { useEffect, useState, useRef } from "react";
import { Contact } from './components/Contact';
import { Details } from './components/Details';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Details/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
