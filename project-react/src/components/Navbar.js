import React,{useEffect} from 'react';
import '../style/style.css';
import '../style/App.scss';
import hamburger from '../images/icons/nav-mob.svg';
import {Link} from 'react-router-dom';

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
    if (x.style.display !=="none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

  return (
    <header className={x.join(" ")}>
        <div className="logo">
          <img onClick={myFunction} id="hamburger-cta" src={hamburger} alt="Logo" title="Logo" />
        </div>

        <nav className="desktop-nav-container">
            <ul>
              {/* <Link to="/Design"> */}
                <li><a href="index.html" id="nav-on">design</a></li>
              {/* </Link> */}
              {/* <Link to="/Contact"> */}
                <li><a href="contact.html">contact</a></li>
              {/* </Link> */}
              {/* <Link to="/Contact"> */}
                <li><a href="contact.html">resume</a></li>
              {/* </Link> */}
              {/* <Link to="/Contact"> */}
                <li><a href="contact.html">photo/video</a></li>
              {/* // </Link>   */}
            </ul>
        </nav>

        <nav className="mobile-nav-container">
              <ul id="myLinks">
                {/* <Link to="/Design"> */}
                  <li><a href="index.html" id="nav-on">design</a></li>
                {/* </Link> */}
                {/* <Link to="/Contact"> */}
                  <li><a href="contact.html">contact</a></li>
                {/* </Link> */}
                {/* <Link to="/Contact"> */}
                  <li><a href="contact.html">resume</a></li>
                {/* // </Link> */}
                {/* <Link to="/Contact"> */}
                  <li><a href="contact.html">photo/video</a></li>
                {/* // </Link>   */}
              </ul>
        </nav>
    </header>
  )
};

export default Navbar;
