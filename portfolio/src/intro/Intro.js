import njsLogo from '../images/Nodejs_logo.svg';
import sqlLogo from '../images/Sql_data_base_with_logo.png';
import expressLogo from '../images/expressjs_logo_icon_169185.png';
import rayHelm from '../images/helm.jpg';
import reactLogo from '../images/react.png';
import fGrade from '../images/fGrade.jpg';
import ElemArt from '../images/ElemArt.jpg';
import nameWord from '../images/nameWord.jpg';
import ppex from '../videos/ppexvideo.mp4';
import hexGame from '../videos/HexGameVideo.mp4';

import React, { useState, useEffect } from 'react';

 
import './Intro.css';

export default function Intro() {

    const clipHeight = 226;
    const clipHeightTwo = 227;
    const docHeight = document.documentElement.clientHeight;

    const [scroll, setScroll] = useState(0);
    const [descriptionText, setDescriptionText] = useState(
      "I like coding in my free time and I aspire to be a programmer. " + 
      "I enjoy learning about new things. Currently I'm learning node.js " + 
      "and react to build web apps with the SERN stack. You can learn more " + 
      "about me and my projects below."
    );
    const [descTwo, setDescTwo] = useState(30);

    useEffect(() => {
      var userVh = scroll * 100 / docHeight;
      if(userVh < 100){
        setDescriptionText(
          "I like coding in my free time and I aspire to be a programmer. " + 
          "I enjoy learning about new things. Currently I'm learning node.js " + 
          "and react to build web apps with the SERN stack. You can learn more " + 
          "about me and my projects below."
        );
      }
      if(userVh > 100){
        setDescriptionText(
          "I also have experience coding in Java and C++. " + 
          "I've even made a couple of games in them! I also " + 
          "love art and drawing and try to incorporate them in my designs."
        );
      }
    }, [scroll]);

    useEffect(() => {
      const nextClip = scroll - ((clipHeightTwo / 100) * docHeight);
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
    return (
      <>
      <div style={{position: `absolute`}}>
        <img src={fGrade} width="600" height="700vw" className="fGrade moving-image" style={{
          transform: `translateY(-${scroll * 3}px)`,
          position: `relative`
        }} />
        <img src={rayHelm} width="400vw" height="600vw" className="rayHelm moving-image" style={{
          transform: `translateY(-${scroll * 1}px)`,
          position: `relative`
        }} />
        <img src={ElemArt} width="500vw" height="500vw" className="ElemArt moving-image" style={{
          transform: `translateY(-${scroll * 2}px)`,
          position: `relative`
        }} />
        <img src={nameWord} width="400vw" height="300vw" className="nameWord moving-image" style={{
          transform: `translateY(-${scroll * 4}px)`,
          position: `relative`
        }} />

      </div>

        <h1 className="intro-top">HI, IM</h1>
        <h1 className="intro-name">RAYAAN ANSARI</h1>

        <div className="tech-stack">
          <img src={sqlLogo} width="200vw" height="100vw" />
          <img src={expressLogo} width="200vw" height="200vw" />
          <img src={reactLogo} width="200vw" height="200vw" />
          <img src={njsLogo} width="200vw" height="200vw" />
        </div>
        <p className="personal-desc" style={{
          clipPath: `inset(0 0 ${Math.max(scroll - ((clipHeight / 100) * docHeight), 0)}px 0)`,
          transform: 'clip-path 0.2 ease-out',
        }}>
          {descriptionText}
        </p>
        <p className="personal-desc-two" style={{
          clipPath: `inset(${descTwo}px 0 0 0)`,
          transform: 'clip-path 0.2 ease-out',
          opacity: `${1 - (scroll - 2.26 * docHeight) / (4300 - 2.26 * docHeight)}`
        }}>
          My projects include 2 games and one full stack app. Both games were developed in Java and Eclipse while the app (and this portfolio) was made in SERN and VS Code.
        </p>
        <a href="https://drive.google.com/file/d/1yIAWAeRlEJf1BRFzMP2y-3gtzBwzw3BZ/view?usp=drive_link" >
          <div className="ppex-link">
            <h1>Percent Panic</h1>
            <p style={{marginBottom: 4 + 'vh'}}>Press anywhere on the video or text to download the Percent Panic .jar file</p>
            <video width="700px" height="400px" autoPlay muted loop>
              <source src={ppex} type="video/mp4" />
              Your browser does not support the video tag
            </video>
            <p style={{marginTop: 3 + 'vh'}}>
              The goal of the game is to get as much of the map as you can! When entering an open space 
              a trail will be made behind you. Upon reaching a "safe sqaure"(borders) the smallest of the regions 
              will be enclosed. If there are spikes within the smallest region, no region will be enclosed, but 
              spikes will be unable to pass through the newly drawn border.
            </p>
          </div>
        </a>
        <a href="https://drive.google.com/file/d/1kylvz2vKkmgWBxzrdk3XYpiAjKYfMwvG/view?usp=drive_link" >
          <div className="hexGame-link">
            <h1>6 in a row!</h1>
            <p style={{marginBottom: 4 + 'vh'}}>Press anywhere on the video or text to download the HexGame .jar file</p>
            <video width="700px" height="400px" autoPlay muted loop>
              <source src={hexGame} type="video/mp4" />
              Your browser does not support the video tag
            </video>
            <p style={{marginTop: 3 + 'vh'}}>
              The goal of this game is to get 6 in a row, such that the centers of all hexagons is a straight line.
              First the player makes two turns, placing two adjacent hexagons. Then the AI removes 1 of the two hexagons.
              The clever part is, if the AI plays optimally, the player can never win!
            </p>
          </div>
        </a>
    </>
    );
}