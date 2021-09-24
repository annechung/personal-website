import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll'


function NavBar(props) {
  return (
    <Navbar bg="primary" expand="lg" fixed="top">
      <Container>
        <Link to="home" duration={500}>
          <Navbar.Brand>
            Anne Chung
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link to="about" duration={500}>
              <Nav.Link>
                About
              </Nav.Link>
            </Link>
            <Link to="experience" duration={500}>
              <Nav.Link>
                Experience
              </Nav.Link>
            </Link>
            <Link to="projects" duration={500}>
              <Nav.Link>
                Projects
              </Nav.Link>
            </Link>
            <Link to="contact" duration={500}>
              <Nav.Link>
                Contact
              </Nav.Link>
            </Link>
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
