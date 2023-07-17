import './App.css';
import React,{useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IntroContainer from './components/IntroContainer';
import HowDoVision from './components/HowDoVision';




function App() {
  const [navbarColor, setNavbarColor] = useState('rgb(107, 77, 108)');
  const pageTopRef = useRef(null);
  const howDoVisionRef  = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      //const navbar = document.querySelector('.navbar');


      if (scrollPosition > 0) {
        setNavbarColor('dark');
      } else {
        setNavbarColor('rgb(107, 77, 108)');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHowDoVision = () => {
    if (howDoVisionRef.current) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const topOffset = howDoVisionRef.current.offsetTop - navbarHeight -40;

      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (

    <div className="App" >
      <Navbar bg={navbarColor} variant={navbarColor} data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <span className='brand-text'>N E W P H A S E</span>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={scrollToTop}>HOME</Nav.Link>
            <Nav.Link onClick={scrollToHowDoVision}>ABOUT</Nav.Link>
            <Nav.Link href="#pricing">FEATURE</Nav.Link>
            <Nav.Link href="#features">PROCESS</Nav.Link>
            <Nav.Link href="#features">PRICING</Nav.Link>
            <Nav.Link href="#features">REVIEW</Nav.Link>
            <Nav.Link href="#features" className='text-end'>CONTECT</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <div ref={pageTopRef}>
        <IntroContainer />
          <div ref={howDoVisionRef}>
        <HowDoVision />
          </div>
        </div>
  </div>
      
  );
}

export default App;
