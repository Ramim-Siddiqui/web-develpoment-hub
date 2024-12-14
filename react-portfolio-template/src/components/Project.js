import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Project = () => {
    const style2 = {
      minHeight: "90vh",
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
        <Row>
          <Col>
          
          </Col>
        </Row>
      </Container>
  )
}

export default Project
