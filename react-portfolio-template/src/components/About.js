import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const About = () => {
  const style2 = {
    minHeight: "87vh",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'black',
    overflow: 'hidden',
  };

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  const style = {
    fontFamily: "Poppins",
    fontSize: "60px",
    background: `linear-gradient(to right, #ff00cc, #3333cc)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  const style3 = {
    fontFamily: "Poppins",
    color: "white",
    fontSize: "30px",
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
      <animated.div style={fadeIn}>
        <Row className='justify-content-center text-center'>
          <Col>
            <span style={style}>About Me</span>
          </Col>
        </Row>
        <Row className='justify-content-center text-center' style={style3}>
          <Col>
            <span>Hi, I'm Ramim Ali Siddiqui, a passionate web developer currently pursuing a degree in Computer Science from Sukkur IBA University. I have a strong foundation in web technologies and programming languages. My skill set includes HTML, CSS, Bootstrap, JavaScript, and ReactJS. I enjoy creating responsive and dynamic web applications that provide a great user experience. As a lifelong learner, I'm always exploring new technologies and seeking opportunities to enhance my coding skills. I believe in the power of clean and efficient code to build robust and scalable web solutions.
            </span>
          </Col>
        </Row>
      </animated.div>
    </Container>
  )
}

export default About;
