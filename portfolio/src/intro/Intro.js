import njsLogo from '../images/Nodejs_logo.svg';
import sqlLogo from '../images/Sql_data_base_with_logo.png';
import expressLogo from '../images/expressjs_logo_icon_169185.png';
import rayHelm from '../images/helm.jpg';
import reactLogo from '../images/react.png';
import fGrade from '../images/fGrade.jpg';
import ElemArt from '../images/ElemArt.jpg';
import nameWord from '../images/nameWord.jpg';

import React, { useState, useEffect } from 'react';
 
import './Intro.css';
import JavaGames from '../JavaGames/JavaGames.js';
import {Fade} from 'react-awesome-reveal';

export default function Intro({scroll}) {

    const clipHeight = 243;
    const clipHeightTwo = 244;
    const docHeight = document.documentElement.clientHeight;

    // const [scroll, setScroll] = useState(0);
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

    // useEffect(() => {
    //   function handleScroll() {
    //     const position = window.scrollY;
    //     setScroll(position);
    //   }

    //   window.addEventListener('scroll', handleScroll, { passive: true });

    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   }
    // }, []);
    return (
      <div className="total-cont-2">
        <div className="introduce">
          <h1 className="intro-top">HI, IM</h1>
          <h1 className="intro-name">RAYAAN ANSARI</h1>
        </div>
        {/* <div className="tech-stack">
          <Fade duration={3000}>
            <img src={sqlLogo} style={{width: '10vw', height: '5vw'}} />
            <img src={expressLogo} className="logo-cont" />
            <img src={reactLogo} className="logo-cont" />
            <img src={njsLogo} className="logo-cont" />
          </Fade>
        </div> */}
        <div style={{position: `absolute`, height: '10vh', width: '71vw'}}>
          <img src={fGrade} className="fGrade moving-image" style={{
              transform: `translateY(-${scroll * 3}}px)`,
              position: `relative`
          }} />
          <img src={rayHelm} className="rayHelm moving-image" style={{
            transform: `translateY(-${scroll * 1}px)`,
            position: `relative`
          }} />
          <img src={ElemArt} className="ElemArt moving-image" style={{
            transform: `translateY(-${scroll * 2}px)`,
            position: `relative`
          }} />
          <img src={nameWord} className="nameWord moving-image" style={{
            transform: `translateY(-${scroll * 4}px)`,
            position: `relative`
          }} />
        </div>
        <p className="personal-desc" style={{
          clipPath: `inset(0 0 ${Math.max(scroll - ((clipHeight / 100) * docHeight), 0)}px 0)`,
          transform: 'clip-path 0.2 ease-out',
        }}>
          {descriptionText}
        </p>
    </div>
    );
}