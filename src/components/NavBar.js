import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import logoW from '../images/logo-white.png'
import linkin from '../images/linkedin.png'
import download from '../images/download2.png'
import navIcon3 from "../images/github2.png";
import resume from "../Jason_Resume.pdf";

export const NavBar = (props) =>{
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if (window.scrollY >50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    function scrollToTargetArea() {
      const targetArea = document.querySelector('#connect');
      
      if (targetArea) {
        targetArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={logoW} alt="LOGO" id='Nav-logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#details" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>DETAILS</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>PROJECTS</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/hongrui-zhang-06b03a1ab'><img src={linkin} alt='linkin'/></a>
                <a href='https://github.com/Windsky0829'><img src={navIcon3} alt='Git hub'/></a>
                <a href={resume} download="JasonResume"><img src={download} alt='Resume download'/></a>
            </div>
            <button className='vvd' onClick={scrollToTargetArea}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
