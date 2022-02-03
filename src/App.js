import React from "react";
import "./style.css";
import Hero from './components/Hero';
import Contact from './components/Contact';
import './components/Header';
export default function App() {
  return (
    <div>
      {/* <Hero /> */}
      <Header brand= "Contact Manager" name="JJ"/>
      <Contact myname="susan" email="abc@gmail.com" phone="1208268937"/>
      <Contact myname="jenifer" email="abc@gmail.com" phone="58566845"/>
      <Contact myname="ninal" email="abc@gmail.com" phone="87562149"/>
    </div>
  );
}
