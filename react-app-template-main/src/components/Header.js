import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const style = {
  textDecoration: "none",
  fontFamily: "Poppins",
  background: `linear-gradient(to right, #ff00cc, #3333cc)`, 
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  
};

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand><Link to="/" style={{ fontFamily: "Poppins", fontSize: "30px", textDecoration: "none"}}>Company Name</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link
                to="/home"
                style={{
                  ...style,
                  color: hoveredLink === 'home' ? 'blue' : 'white'
                }}
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/about"
                style={{
                  color: hoveredLink === 'about' ? 'blue' : 'white'
                }}
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/herosection"  style={{color: hoveredLink === 'project' ? 'blue' : 'white' }}
                onMouseEnter={() => handleMouseEnter('project')}
                onMouseLeave={handleMouseLeave}
              >
                Herosection
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact"  style={{color: hoveredLink === 'contact' ? 'blue' : 'white' }}
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={handleMouseLeave}
              >
                Contact
              </Link>
            </Nav.Link>
            <Button variant="outline-light btn-sm" style={{ fontFamily: "Poppins" }}>
                Login
            </Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;