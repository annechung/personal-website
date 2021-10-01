import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { scroller } from 'react-scroll'


function NavBar(props) {
  return (
    <Navbar bg="primary" expand="lg" fixed="top">
      <Container>
        <Nav.Link
          onClick={() => scroller.scrollTo('home', {
          offset: -70,
          duration: 500,
        })}>
          <Navbar.Brand>
            Anne Chung
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link
              onClick={() => scroller.scrollTo('about', {
              offset: -70,
              duration: 500,
            })}>
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => scroller.scrollTo('experience', {
              offset: -30,
              duration: 500,
            })}>
              Experience
            </Nav.Link>
            <Nav.Link
              onClick={() => scroller.scrollTo('projects', {
              offset: -30,
              duration: 500,
            })}>
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => scroller.scrollTo('contact', {
              offset: -30,
              duration: 500,
            })}>
              Contact
            </Nav.Link>
            <Nav.Link target="_blank" href="AnneChungResumeS22.pdf">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
