import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IntroContainer from './components/IntroContainer';



function App() {
  return (

    <div className="App" >
      <Navbar bg="dark" variant='dark' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <span className='brand-text'>N E W P H A S E</span>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#features">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">FEATURE</Nav.Link>
            <Nav.Link href="#features">PROCESS</Nav.Link>
            <Nav.Link href="#features">PRICING</Nav.Link>
            <Nav.Link href="#features">REVIEW</Nav.Link>
            <Nav.Link href="#features" className='text-end'>CONTECT</Nav.Link>
          </Nav>
        </Container>
        </Navbar>

        <IntroContainer />
  </div>
      
  );
}

export default App;
