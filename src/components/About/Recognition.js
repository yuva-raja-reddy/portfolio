// Recognition.js
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

function Recognition() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const recognitions = [
    {
      thumbnail: require("../../Assets/recognition1_thumb.png"),
      pdfUrl: "https://drive.google.com/file/d/1YNIY_2cJONYIskc0TlmuFDYIyXMR0ZVV/view?usp=sharing"
    },
    {
      thumbnail: require("../../Assets/recognition2_thumb.png"),
      pdfUrl: "https://drive.google.com/file/d/14WiCVFXSfv0ufxnhwfNfnmMHfEUqmCnW/view?usp=sharing"
    },
    {
      thumbnail: require("../../Assets/recognition3_thumb.png"),
      pdfUrl: "https://drive.google.com/file/d/11sNKzx9R72kVhreKqgHfRm5OWBjjwKVl/view?usp=sharing"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recognitions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? recognitions.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container fluid>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          My <strong className="purple">Recognitions</strong>
        </h1>
        <div className="recognition-carousel">
          <button className="carousel-arrow left" onClick={prevSlide}>❮</button>
          <div className="recognition-slider">
            {recognitions.map((recognition, index) => {
              let position = index - currentIndex;
              if (position < -1) position += recognitions.length;
              if (position > 1) position -= recognitions.length;
              
              return (
                <a 
                  key={index}
                  href={recognition.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`recognition-slide ${position === 0 ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${position * 150}%) scale(${position === 0 ? 3 : 0.7})`,
                    zIndex: position === 0 ? 2 : 1,
                    opacity: position === 0 ? 1 : 0.5
                  }}
                >
                  <img 
                    src={recognition.thumbnail}
                    alt={`Recognition ${index + 1}`}
                    className="recognition-image"
                  />
                </a>
              );
            })}
          </div>
          <button className="carousel-arrow right" onClick={nextSlide}>❯</button>
        </div>
      </Row>
    </Container>
  );
}

export default Recognition;