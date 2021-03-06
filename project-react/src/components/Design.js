import React, { useEffect, useRef } from 'react';

//extract assets into separate folder
import track from '../images/moment-track2.png';
import cliq from '../images/cliq2.png';
import bosstep from '../images/boss.png';
import '../style/style.css';
import '../style/grid.css';

// end of extraction
import { useLocation } from 'react-router-dom'


import useWindowSize from "../hooks/useWindowSize";


function Design() {
  //Hook to grab window size
  const size = useWindowSize();

  const location = useLocation();



  

  // Ref for parent div and scrolling div
  const app = useRef();
  const scrollContainer = useRef();

  // Configs
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0
  };
  
  // Run scrollrender once page is loaded.
  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  });

  //set the height of the body.
  useEffect(() => {
    setBodyHeight();
  }, [size.height]);
  
  //Set the height of the header 

  //Set the height of the body to the height of the scrolling div
  var setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height 
    }px`;
  };


  // Scrolling
  const skewScrolling = () => {

    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;
    //Assign skew and smooth scrolling to the scroll container

    scrollContainer.current.style.transform = `translateY(-${data.rounded}px) skewY(${skew}deg)`;
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };


  

  return (
    <div ref={app} className="App">

      <div ref={scrollContainer}>

            
          <div ref={scrollContainer} className="scroll">
            <main className="">
              <div className="grid-container">
                <article className="portfolio-intro col-10">
                  <div className="">
                    <h1>Xiang Daniel Shi</h1>
                    <p>Aspiring UX/UI web designer and photographer from Vancouver Canada</p>
                  </div>
                </article>
                <article className="col-10 article-full-page">
                  <div className="">
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero recusandae, exercitationem at, dignissimos dolorum tempora facere qui neque sequi voluptas vitae tenetur.</h1>
                  </div>
                </article>
                <article className="portfolio-intro col-10">
                  <div className="personal">
                    <h1>RECENT PROJECTS</h1>
                  </div>
                </article>
              </div>
              <h2 className="project-cheer">
                <span className="">- BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP -</span>
              </h2>
              <div className="grid-container">
                <section className="page project-container max-col">
                  <div className="hero">
                    {/* mobile version */}
                    <h2 className="title-wrapper mobile-project-header">
                        <span>B</span>
                        <span>O</span>
                        <span>S</span>
                        <span>S</span>
                        <span>T</span>
                        <span>E</span>
                        <span>P</span>
                    </h2>
                    <a href="bosstep.html"><img alt="BOSSTEP Project Graphic"  src={bosstep}/></a>
                  </div>
                  <div className="project-description">
                    <h2 className="title-wrapper desktop-project-header">
                        <span>B</span>
                        <span>O</span>
                        <span>S</span>
                        <span>S</span>
                        <span>T</span>
                        <span>E</span>
                        <span>P</span>
                    </h2>
                    <h3>- Design Goal</h3>
                    <p>Gamified exercise app geared towards kids who can choose heroes to play as, where they must walk and be physically active to develop and interact with their hero.</p>
                    <a href="bosstep.html" className="primary-btn">View Process</a>
                  </div>
                
                <div className="project-tool-wrapper">
                  <h3>Project Tools</h3>
                  <ul className="project-tools">
                    <li>
                      <div className="color-block"></div>
                    </li>
                    <li>
                      <div className="color-block"></div>
                    </li>
                    <li>
                      <div className="color-block"></div>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
              <h2 className="project-cheer">
                <span className="">- BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP -</span>
              </h2>
              <div className="grid-container">
                <section className="page project-container max-col">
                  <div className="hero">
                    {/* mobile version */}
                    <h2 className="title-wrapper mobile-project-header">
                        <span>M</span>
                        <span>O</span>
                        <span>M</span>
                        <span>E</span>
                        <span>N</span>
                        <span>T</span>
                    </h2>
                    <h2 className="title-wrapper mobile-project-header">
                        <span>T</span>
                        <span>R</span>
                        <span>A</span>
                        <span>C</span>
                        <span>K</span>
                    </h2>
                    <a href="track.html"><img alt="Moment Track Project Graphic" src={track}/></a>
                  </div>
                  <div className="project-description">
                    <h2 className="title-wrapper desktop-project-header">
                        <span>M</span>
                        <span>O</span>
                        <span>M</span>
                        <span>E</span>
                        <span>N</span>
                        <span>T</span>
                    </h2>
                    <h2 className="title-wrapper desktop-project-header">
                        <span>T</span>
                        <span>R</span>
                        <span>A</span>
                        <span>C</span>
                        <span>K</span>
                    </h2>
                    <h3>- Design Goal</h3>
                    <p className=""><strong className="highlight-text">
                      Know your battery. </strong>
                      Stay informed with live monitoring data and feedback reports for your Moment Energy battery. Maintain peace of mind by having the tools to know that the battery is doing its job, and doing it well.</p>
                    <a href="track.html" className="primary-btn">View Process</a>
                  </div>
                  
                  <div className="project-tool-wrapper">
                    <h3>Project Tools</h3>
                    <ul className="project-tools">
                      <li>
                        <div className="color-block"></div>
                      </li>
                      <li>
                        <div className="color-block"></div>
                      </li>
                      <li>
                        <div className="color-block"></div>
                      </li>
                    </ul>
                  </div>
                </section>

              </div>
              <h2 className="project-cheer">
                <span className="">- BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP - BOSSTEP -</span>
              </h2>
              <div className="grid-container">
                <section className="page project-container max-col">
                  <div className="hero">
                    <h2 className="title-wrapper mobile-project-header">
                        <span>C</span>
                        <span>L</span>
                        <span>I</span>
                        <span>Q</span>
                    </h2> 
                    <a href="cliq.html"><img alt="CLIQ Project Graphic" src={cliq}/></a>
                  </div>
                  <div className="project-description">
                    <h2 className="title-wrapper desktop-project-header">
                        <span>C</span>
                        <span>L</span>
                        <span>I</span>
                        <span>Q</span>
                    </h2>
                    <h3>- Design Goal</h3>
                    <p className="">CLIQ is an <strong className="highlight-text">E-COMMERCE website</strong> designed over a 6 week period for an upper year web development course. The idea is to sell artisanal keyboards and to engage both new users joining the mechanical keyboard community and veterans.</p>
                  <a href="cliq.html" className="primary-btn">View Process</a>
                  </div>
                  
                  <div className="project-tool-wrapper">
                    <h3>Project Tools</h3>
                    <ul className="project-tools">
                      <li>
                        <div className="color-block"></div>
                      </li>
                      <li>
                        <div className="color-block"></div>
                      </li>
                      <li>
                        <div className="color-block"></div>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>

            </main>
          
          <footer>
            <div className="footer-wrapper">  
              <ul className="footer-menu">
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="resume.html">Resume</a>
                </li>
                <li>
                  <a href="about.html">About Me</a>
                </li>
              </ul>
            </div> 
            <p className="copyright">Xiang Daniel Shi ?? 2020</p>
          </footer>
          </div>
          {/* end skew scroll */}
        </div>
    </div>
  );
}

export default Design;
