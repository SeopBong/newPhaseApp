import './App.css';
import React,{useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IntroContainer from './components/IntroContainer';
import HowDoVision from './components/HowDoVision';
import RestPart from './components/RestPart';
import FeaturePart from './components/FeaturePart';
import ProcessPart from './components/ProcessPart';
import ProcessExp from './components/ProcessExp';
import PricingPart from './components/PricingPart';
import ReviewPart from './components/ReviewPart';
import Contect from './components/Contect';
import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [navbarColor, setNavbarColor] = useState('rgb(107, 77, 108)'); 
  const pageTopRef = useRef(null);
  const howDoVisionRef  = useRef(null);
  const navbarRef = useRef(null);
  const [isDropdown, setIsDropdown] = useState(false);
  const featurePartRef = useRef(null);
  const processPartRef = useRef(null);
  const pricingPartRef = useRef(null);
  const reviewPartRef = useRef(null);
  const ContectRef = useRef(null);

  //해당 위치는 프로세스와 같은 파트임

  //***************************useEffect 이벤트 Scroll이 조금이라도 내려가면 Navbar 색상 변경 보라->Dark********************************************************************* */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
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

  useEffect(() => {
    const handleResize = () => {
      setIsDropdown(window.innerWidth <= 960);
    };

    // 화면 로드 시와 창 크기 변경 시에 이벤트 처리 함수를 호출합니다.
    handleResize();
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 처리 함수를 정리합니다.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //************************************************************************************************ */
  //***************************HOME 버튼 클릭시 Scroll 제일 상단 position으로 이동********************************************************************* */
  const scrollToTop = () => {
    if (isDropdown) {
      setIsDropdown(false);
      
    }
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //************************************************************************************************ */
  //*****************************ABOUT 버튼 클릭시 howDoVisionRef 위치로 이동******************************************************************* */
  const scrollToHowDoVision = () => {
    if (howDoVisionRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const topOffset = howDoVisionRef.current.offsetTop - navbarHeight -40;

      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
    
  };
  //*************************************************************************************************/
   // **********************************FEATURE 버튼 클릭시 featureRef 위치로 이동***********************************/
   const scrollToFeaturePart = () => {
    if (featurePartRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const topOffset = featurePartRef.current.offsetTop - navbarHeight - 40;

      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };
  // ************************************************************************************************/
 // **********************************FEATURE 버튼 클릭시 processPartRef 위치로 이동***********************************/
 const scrollToProcessPart = () => {
  if (processPartRef.current) {
    const navbarHeight = navbarRef.current.offsetHeight;
    const topOffset = processPartRef.current.offsetTop - navbarHeight - 40;

    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  }
};
// ************************************************************************************************/
// **********************************FEATURE 버튼 클릭시 PricingPartRef 위치로 이동***********************************/
const scrollToPricingPart = () => {
  if (pricingPartRef.current) {
    const navbarHeight = navbarRef.current.offsetHeight;
    const topOffset = pricingPartRef.current.offsetTop - navbarHeight - 40;

    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  }
};
// ************************************************************************************************/
// **********************************FEATURE 버튼 클릭시 PricingPartRef 위치로 이동***********************************/
const scrollToReviewPart = () => {
  if (reviewPartRef.current) {
    const navbarHeight = navbarRef.current.offsetHeight;
    const topOffset = reviewPartRef.current.offsetTop - navbarHeight - 40;

    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  }
};
// ************************************************************************************************/
// **********************************FEATURE 버튼 클릭시 PricingPartRef 위치로 이동***********************************/
const scrollToContect = () => {
  if (ContectRef.current) {
    const navbarHeight = navbarRef.current.offsetHeight;
    const topOffset = ContectRef.current.offsetTop - navbarHeight - 40;

    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  }
};
// ************************************************************************************************/
 
  //**********************************드롭 박스***************************************************************/
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  //************************************************************************************************ */

  return (

    <div className="App" >
      <div>
      {isDropdown ? (
        <div>
        <Navbar bg={navbarColor} variant={navbarColor} data-bs-theme="dark" fixed="top" ref={navbarRef} >
          <Navbar.Brand className='brand-text' href="#home">N E W P H A S E</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Dropdown show={dropdownOpen} align="end" onToggle={toggleDropdown}>
                <Dropdown.Toggle variant="Secondary" id="dropdown-icon-button" style={{ fontSize: "30px" }}>
                <FontAwesomeIcon icon={faBars} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item onClick={scrollToTop}>HOME</Dropdown.Item>
                <Dropdown.Item onClick={scrollToHowDoVision}>ABOUT</Dropdown.Item>
                <Dropdown.Item onClick={scrollToFeaturePart}>FEATURE</Dropdown.Item>
                <Dropdown.Item onClick={scrollToProcessPart}>PROCESS</Dropdown.Item>
                <Dropdown.Item onClick={scrollToPricingPart}>PRICING</Dropdown.Item>
                <Dropdown.Item onClick={scrollToReviewPart}>REVIEW</Dropdown.Item>
                <Dropdown.Item onClick={scrollToContect}>CONTECT</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      ) : (
        <Navbar bg={navbarColor} variant={navbarColor} data-bs-theme="dark" fixed="top" ref={navbarRef}>
           <Container>
          <Navbar.Brand className='brand-text' href="#home">N E W P H A S E</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link onClick={scrollToTop}>HOME</Nav.Link>
              <Nav.Link onClick={scrollToHowDoVision}>ABOUT</Nav.Link>
              <Nav.Link onClick={scrollToFeaturePart}>FEATURE</Nav.Link>
              <Nav.Link onClick={scrollToProcessPart}>PROCESS</Nav.Link>
              <Nav.Link onClick={scrollToPricingPart}>PRICING</Nav.Link>
              <Nav.Link onClick={scrollToReviewPart}>REVIEW</Nav.Link>
              <Nav.Link onClick={scrollToContect}>CONTECT</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      )}
      <div ref={pageTopRef}>
        </div>  
        <IntroContainer />
          <div ref={howDoVisionRef}>
        <HowDoVision />
          </div>
          <RestPart />
          <div ref={featurePartRef}>
          <FeaturePart />
          </div>
        <div ref={processPartRef}>
        <ProcessPart />
        <ProcessExp />
        </div>
        <div ref={pricingPartRef}>
          <PricingPart />
        </div>
        <div ref={reviewPartRef}>
          <ReviewPart />
        </div>
        <div ref={ContectRef}>
        <Contect />

        </div>
         <div>
         </div>
          
        </div>
  </div>
      
  );
}

export default App;
