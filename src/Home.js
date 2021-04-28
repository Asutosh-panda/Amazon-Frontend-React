import React from 'react';
import Nav from "./Nav"
import './App.css';
import Slide from './Slide'
import Card from './Card';
import "./home.css"



function Home() {
  return (
    <>
   <div className="blackMenu"></div>
    <div className="Home">
     <Slide/>
     <Card/>
    </div>
    </>

  );
}

export default Home;
