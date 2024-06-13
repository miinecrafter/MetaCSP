import './App.css';
import Intro from './intro/Intro';
import Forexpress from './Forexpress/Forexpress';
import {useState, useEffect} from 'react';

import landing1 from './images/forexpressLanding1.png';
import landing2 from './images/forexpressLanding2.png';
import landing3 from './images/forexpressLanding3.png';
import profile1 from './images/profile1.png';
import home1 from './images/Home1.png';

import api1 from './images/api1.png';
import api2 from './images/api2.png';

import reactImg from './images/react.png';
import expressImg from './images/express.png';
import nodeLogo from './images/Nodejs_logo.svg';
import sqlLogo from './images/Sql_data_base_with_logo.png'
import postmanImg from './images/postman.webp';

import node1 from './images/node1.png';
import node2 from './images/node2.png';
import node3 from './images/node3.png';

import Contact from './Contact/Contact';
import JavaGames from './JavaGames/JavaGames';
import StackDescription from './Forexpress/StackDescription/StackDescription';
import ImageMover from './Forexpress/ImageMover/ImageMover';

import React, { Component } from "react";
import ImageFadeIn from "react-image-fade-in";
import {Fade} from 'react-awesome-reveal/Fade';

function App() {

  const docHeight = document.documentElement.clientHeight;
  const [descTwo, setDescTwo] = useState(30);
  const [opacity, setOpacity] = useState(0);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    setOpacity(1 - 1.3 * (scroll - 2.26 * docHeight) / (3500 - 2.26 * docHeight));
  }, [scroll])
  useEffect(() => {
      function handleScroll() {
        const position = window.scrollY;
        setScroll(position);
      }
  
      window.addEventListener('scroll', handleScroll, { passive: true });
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
  }, []);

  useEffect(() => {
    const nextClip = scroll - ((222 / 100) * docHeight);
    if(nextClip <= 0){
      setDescTwo(.3 * docHeight);
    }
    else if(nextClip < 0.3 * docHeight){
      setDescTwo((0.3 * docHeight - nextClip));
    }
    else{
      setDescTwo(0);
    }
  }, [scroll]);

  return (
    <div className="page">
      
      <div className="App">
        <Intro scroll={scroll} />
      </div>

      <div className="games">
        <Fade duration={1000}>
          <JavaGames />
        </Fade>
        
        <p className="personal-desc-two" style={{
          clipPath: `inset(${descTwo}px 0 0 0)`,
          transform: 'clip-path 0.2 ease-out',
          opacity: `${opacity}`
        }}>
          My projects include 2 games and one full stack app. Both games were developed in Java and Eclipse while the app (and this portfolio) was made in SERN and VS Code.
        </p>
       

        <Fade duration={1000}>
          <div className="flex">
            <Forexpress src={reactImg} scroll={scroll} start={500} end={900} maximum={100} endx={-50} endy={50 / 6} images={[landing1, landing2, landing3, home1, profile1]} text={
              "For the frontend I used ReactJS and VS Code. Every web page in the Forexpress website (and this one) is responsive. " + 
              "I did this by forcing all animations, text sizes, image/video sizes, and any other element in the webpage to be sized " + 
              "relative to the length and width of the clients window. This way the website works on mobile devices, PCs, and TVs!"
            } title={"Frontend"} />
            <div className="center-img">
            < img src={reactImg} className="img-size" style={{transform: 'translateX(-15vw)'}} />
            </div>
          </div>
          <div className="flex">
            <Forexpress src={expressImg} scroll={scroll} start={1300} end={1700} maximum={100} endx={50} endy={-200 / 6} images={[api1, api2]} text={
              "I created and used 2 REST API's for this project in ExpressJS. One takes the username and returns serialized stock history (currencies traded, " + 
              "time, amount), current balance for each currency, and password. This is used for Login/Signup and User Profile. The second returns " + 
              "ForEx prices for each currency pair, and historical data. Both use HTTP requests."
            } title={"API"} />
            <div className="center-img">
              <img src={expressImg} className="img-size" />
              <img src={postmanImg} className="img-size" />
              </div>
          </div>
          <div className="flex">
            <Forexpress src={nodeLogo} scroll={scroll} start={2100} end={2500} maximum={100} endx={-50} endy={-200 / 6} images={[node1, node2, node3]} text={
              "My backend was created with NodeJS and MySQL. There are 2 databases. One stores user information such as stock history, username/password, and balance. " + 
              "The second stores stock information. This database has a seperate table for each currency pair. Each table contains date and price for the currencies. " + 
              "NodeJS directly posts, puts, deletes, and gets information from the database by executing SQL statements and data is posted, changed, and retrieved with JSON."
            } title={"Backend"} />
            <div className="center-img">
              <img src={nodeLogo} className="img-size" style={{transform: 'translateX(-4vw)'}} />
              <img src={sqlLogo} style={{width: '10vw', height: '5vw', transform: 'translateY(-2vh)'}} />
            </div>
          </div>
          <div className="lim-cont">
            <p className="lim-title">Limitations:</p>
            <p className="lim-desc">
              There are some limitations to my Forexpress app. Currently I don't have money to buy a domain which means it has only been tested locally up to now. 
              Additionally, because I don't have money to afford real ForEx API's, I had to create my own API to create randomized data (Although the server still works 
              like a real ForEx DB, creating new data for each currency every minute and updating the webpage, its just the data is random).
            </p>
          </div>

          <div className="exp-cont">
            <p className="exp-title">Experience:</p>
            <p className="exp-desc">
              My experience consists of 4 years of Java experience in high school. Through those 4 years I also took AP Computer Science A and CS3 (Data Structures & Algorithms course)
              which game me 1 year of college credit. I also have experience in competitive programming; I qualified for USA Computing Olympiad gold division with C++.
            </p>
          </div>

        </Fade>
        
        <Contact />
      </div>
    </div>
    
  );
}
export default App;
