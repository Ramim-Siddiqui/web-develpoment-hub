import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const style2 = {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
    overflow: 'hidden',
  };
  const style = {
    fontFamily: 'Poppins',
    fontSize: '60px',
    background: `linear-gradient(to right, #ff00cc, #3333cc)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <Container fluid style={style2}>
      <style>
        {`
          .star {
            position: absolute;
            background-color: #fff;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            animation: twinkle 2s infinite;
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
          }
        `}
      </style>
      {[...Array(100)].map((_, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
      <Row className="justify-content-center text-center">
        <Col>
          <span style={style}>Contact Me</span>
        </Col>
      </Row>
      <Row className="justify-content-right m-4">
        <Col xs={12} sm={12} md={6}>
          <Form>
            <Form.Group controlId="formName" style={{ display: 'inline-block', marginRight: '10px', color: 'white', fontFamily: 'Poppins'}}>
              <span>Name *</span>
              <Form.Control type="text" placeholder="Enter your name" className="mr-sm-2" />
            </Form.Group>
            <Form.Group controlId="formEmail" style={{ display: 'inline-block', marginRight: '10px' , color: 'white', fontFamily: 'Poppins'}}>
              <span>Email *</span>
              <Form.Control type="email" placeholder="Enter your email" className="mr-sm-2" />
            </Form.Group>

            <Form.Group controlId="formProblem" style={{ color: 'white', fontFamily: 'Poppins', display: 'inline-block',width:"60vw"}}>
              <Form.Label>Describe Your Problem</Form.Label>
              <Form.Control as="textarea" rows={10} placeholder="Write about your problem" />
            </Form.Group>
            <br></br>
            <Button  variant="primary"  type="submit"  style={{borderRadius: '25px', background: 'linear-gradient(to right, #ff00cc, #3333cc)',border: 'none',fontSize: '20px',padding: '10px 20px',}}>
            Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <a href="https://www.facebook.com/RamimAli2003" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
              <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'white' }} />
            </a>
            <a href="https://www.instagram.com/ramimali2003?igsh=MW16NGd6ZHkwcjJvcQ==" target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'white' }} />
            </a>
            <a href="https://www.linkedin.com/in/ramim-siddiqui-910404235" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: 'white' }} />
            </a>
          </div>
      </Row>
    </Container>
  );
};

export default Contact;
