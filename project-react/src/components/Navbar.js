import React,{useEffect} from 'react';
import '../style/style.css';
import './App.scss';
import hamburger from '../images/icons/nav-mob.svg';

const Navbar=() => {
    
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 1 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }

  return (
    <header className={x.join(" ")}>
        <div className="logo">
          <img id="hamburger-cta" src={hamburger} alt="Logo" title="Logo" />
        </div>

        <nav className=" navigation">
            <ul>
            <li><a id="nav-on" href="index.html">design</a></li>
            <li><a href="contact.html">contact</a></li>
            <li><a href="resume.html">resume</a></li>
            <li><a href="camera.html">photo/video</a></li>
            </ul>
        </nav>

        <nav className="mobile-nav-container navigation">
              <ul id="hamburger-links">
                <li><a id="nav-on" href="index.html">design</a></li>
                <li><a href="contact.html">contact</a></li>
                <li><a href="resume.html">resume</a></li>
                <li><a href="camera.html">photo/video</a></li>
              </ul>
              {/* <a href="javascript:void(0);" onClick="myFunction()">
                <img className="scrolled" src={hamburger}></img>
              </a> */}
        </nav>

    </header>
  )
};

export default Navbar;
