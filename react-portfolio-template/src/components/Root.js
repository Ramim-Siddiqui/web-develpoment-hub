import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Root = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Trigger the starting animation after the component mounts
    setVisible(true);
  }, []);

  const style = {
    fontFamily: "Poppins",
    fontSize: "60px",
    background: `linear-gradient(to right, #ff00cc, #3333cc)`, 
    WebkitBackgroundClip: 'text',
    color: 'transparent', 
    opacity: visible ? 1 : 0,
    transform: `rotate(${hovered ? 0 : 720}deg) scale(${hovered ? 1.2 : 1})`,
    transformOrigin: "center center", 
    transition: "transform 1s ease-in-out, opacity 1s ease-in-out", 
  };

  const style2 = {
    minHeight: "86vh",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
    overflow: 'hidden',
  };

  return (
    <Container fluid style={style2}>
      <style>
        {`
          @keyframes rotateIn {
            from {
              transform: rotate(720deg);
            }
            to {
              transform: rotate(0deg);
            }
          }

          @keyframes scaleOut {
            from {
              transform: scale(1);
            }
            to {
              transform: scale(2);
            }
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
      <Row
        className='justify-content-center text-center'
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Col>
          <span>Ramim Siddiqui</span>
        </Col>
      </Row>
      <Row
        className='justify-content-center text-center'
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Col>
          <span>Web Developer</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Root;
