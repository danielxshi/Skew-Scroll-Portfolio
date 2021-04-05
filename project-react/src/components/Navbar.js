import React,{useEffect} from 'react';
import '../style/style.css';
import '../style/App.scss';
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

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display !="none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  return (
    <header className={x.join(" ")}>
        <div className="logo">
          <a>
            <img onClick={myFunction} id="hamburger-cta" src={hamburger} alt="Logo" title="Logo" />
          </a>
        </div>

        <nav className="desktop-nav-container">
            <ul>
              <li><a id="nav-on" href="index.html">design</a></li>
              <li><a href="contact.html">contact</a></li>
              <li><a href="resume.html">resume</a></li>
              <li><a href="camera.html">photo/video</a></li>
            </ul>
        </nav>

        <nav className="mobile-nav-container">
              <ul id="myLinks">
                <li><a id="nav-on" href="index.html">design</a></li>
                <li><a href="contact.html">contact</a></li>
                <li><a href="resume.html">resume</a></li>
                <li><a href="camera.html">photo/video</a></li>
              </ul>
        </nav>
    </header>
  )
};

export default Navbar;
