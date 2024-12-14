import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from "../assets/image/_ef8c717e-0218-4a95-a964-c1b72b3c66ed.jpg";

const Home = () => {
  const style = {
    fontFamily: 'Poppins',
    fontSize: '60px',
    background: `linear-gradient(to right, #ff00cc, #3333cc)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    textAlign: "left",
    animation: 'fadeIn 2s ease-in', // Add animation property
  };

  // Define the animation keyframes
  const keyframes = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(100%); // Start from bottom
      }
      to {
        opacity: 1;
        transform: translateY(0); // Move to the top
      }
    }
  `;

 
  const animationStyle = {
    ...style,
    animation: 'fadeIn 2s ease-in',
  };

  const style2 = {
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
    overflow: 'hidden',
    margin: 0,
  };
  const style3 = {
    fontFamily: "Poppins",
    color: "white",
    fontSize: "30px",
    animation: 'fadeIn 2s ease-in',
  };
  const imageStyle = {
    borderRadius: '10%', 
    width: '70%', 
    height: 'auto', 
    marginLeft:"50px"
  };

  return (
    <Container fluid style={style2}>
      <style>
        {`
          html, body {
            height: 100%;
            margin: 0;
          }

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
          
          ${keyframes} // Apply the animation keyframes
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
      <Row className='justify-content-center text-center'>
        <Col xs={12} sm={12} md={12}>
          <span style={animationStyle}>Hello, I'm Ramim Ali Siddiqui.</span>
        </Col>
      </Row>
      <Row className="justify-content-right m-4" style={style3}>
        <Col xs={12} sm={12} md={6} style={{ marginTop: "10vh" }}>
          I'm a BSCS student at Sukkur IBA
          University. I'm passionate about web development and have a solid
          understanding of HTML, CSS, JavaScript, React.js, and Bootstrap.
          I'm always eager to learn about new technologies and stay updated
          in the ever-evolving world of web development.
        </Col>
        <Col xs={12} sm={12} md={6}>
          <img src={Image} alt='' className="img-fluid" style={imageStyle} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
