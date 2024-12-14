import React, { useEffect, useState } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faBootstrap, faJs, faReact , faFigma} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  const style = {
    fontFamily: "Poppins",
    fontSize: "60px",
    background: `linear-gradient(to right, #ff00cc, #3333cc)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: animated ? 'fadeInUp 2s ease-out' : 'none',
  };

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
  const labelContainerStyle = {
    width: '80%',
    animation: animated ? 'fadeInUp 2s ease-out' : 'none',
  };

  const labelStyle = {
    fontFamily: "Poppins",
    fontSize: "20px",
    marginTop: "20px",
    color: "white",
    width: "20%",
  };

  const progressBarContainerStyle = {
    width: '80%',
    position: 'relative',
  };

  const progressBarFillStyle = {
    width: '100%',
    transformOrigin: 'bottom',
    transform: animated ? 'scaleY(1)' : 'scaleY(0)',
    transition: 'transform 2s ease-out',
  };

  const textStyle = {
    fontFamily: "Poppins",
    fontSize: "20px",
    color: "white",
    marginTop: "20px",
    textAlign: "center",
    animation: animated ? 'fadeInUp 2s ease-out' : 'none',
  };

  return (
    <Container fluid style={{ ...style2}}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
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
      <div className='justify-content-center text-center' style={style}>
        <span>Professional Skills</span>
      </div>
      <div style={textStyle}>
        <p>
          As a web developer, I'm proficient in HTML, CSS, and Bootstrap to craft visually appealing and responsive user interfaces. My expertise extends to JavaScript for interactive and dynamic web functionalities. Additionally, I have hands-on experience with React JS, allowing me to build scalable and efficient web applications. My dedication to staying updated with the latest web technologies empowers me to deliver innovative and effective solutions.
        </p>
      </div>
      <div style={labelContainerStyle}>
        <div style={labelStyle} className='d-flex'>
          <FontAwesomeIcon icon={faHtml5} style={{ fontSize: "2em", marginRight: "10px", color: "#e44d26" }} />
          HTML
        </div>
        <div style={progressBarContainerStyle}>
          <div>
            <div style={progressBarFillStyle}>
            <ProgressBar animated now={90} label={`90%`} style={{ width: '80%', fontFamily:"Poppins", fontSize:"20px" }} />
            </div>
          </div>
        </div>
      </div>
      <div style={labelContainerStyle}>
        <div style={labelStyle} className='d-flex'>
          <FontAwesomeIcon icon={faCss3} style={{ fontSize: "2em", marginRight: "10px", color: "#264de4" }} />
          CSS
        </div>
        <div style={progressBarContainerStyle}>
            <div style={progressBarFillStyle}>
            <ProgressBar animated now={70} label={`70%`} style={{ width: '80%', fontFamily:"Poppins", fontSize:"20px"}} />
            </div>
        </div>
      </div>
      <div style={labelContainerStyle}>
        <div style={labelStyle} className='d-flex'>
          <FontAwesomeIcon icon={faBootstrap} style={{ fontSize: "2em", marginRight: "10px", color: "#563d7c" }} />
          Bootstrap
        </div>
        <div style={progressBarContainerStyle}>
          <div style={progressBarFillStyle}>
            <ProgressBar animated now={75} label={`75%`} style={{ width: '80%', fontFamily:"Poppins", fontSize:"20px" }} />
          </div>
        </div>
      </div>
      <div style={labelContainerStyle}>
        <div style={labelStyle} className='d-flex'>
          <FontAwesomeIcon icon={faJs} style={{ fontSize: "2em", marginRight: "10px", color: "#f0db4f" }} /> 
          JavaScript
        </div>
        <div style={progressBarContainerStyle}>
          <div style={progressBarFillStyle}>
            <ProgressBar animated now={65} label={`65%`} style={{ width: '80%', fontFamily:"Poppins", fontSize:"20px"}} />
          </div>
        </div>
      </div>
      <div style={labelContainerStyle}>
        <div style={labelStyle} className='d-flex'>
          <FontAwesomeIcon icon={faReact} style={{ fontSize: "2em", marginRight: "10px", color: "#61dafb" }} />
          React JS
        </div>
        <div style={progressBarContainerStyle}>
          <div style={progressBarFillStyle}>
            <ProgressBar animated now={70} label={`70%`} style={{ width: '80%', fontFamily:"Poppins", fontSize:"20px"}} />
          </div>
        </div>
      </div>
      <div style={labelContainerStyle}>
        <div style={labelStyle} className='d-flex'>
          <FontAwesomeIcon icon={faFigma} style={{ fontSize: "2em", marginRight: "10px", color: "#61dafb" }} />
          Figma
        </div>
        <div style={progressBarContainerStyle}>
          <div style={progressBarFillStyle}>
            <ProgressBar animated now={80} label={`80%`} style={{ width: '80%', fontFamily:"Poppins", fontSize:"20px"}} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
