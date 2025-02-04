// Experience.js
import React from "react";
import { Row } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      period: "Jan 2021 - Jan 2023",
      role: "Data Scientist Analyst",
      company: "Accenture AI",
      location: "Bengaluru, India",
      description: "Led end-to-end NLP pipeline development for aviation insurance underwriting, achieving 92% accuracy. Collaborated with computer vision team to preprocess 5K+ scanned documents using OCR. Built decision tree classifier automating 80% of insurance decisions. Designed cross-sell recommender system increasing upsell conversion by 35%."
    },
    {
      period: "Nov 2020 - Dec 2021",
      role: "Machine Learning Engineer",
      company: "Cluzters.ai",
      location: "Remote, India",
      description: "Developed document classification model using BERT and TF-IDF. Optimized feature engineering improving model performance by 25%. Automated model training using AWS SageMaker and related services."
    },
    {
      period: "Oct 2019 - Nov 2020",
      role: "Research Collaborator",
      company: "Amrita School of Engineering",
      location: "Kerala, India",
      description: "Conducted extensive data preprocessing using Pandas and NumPy. Implemented text tokenization and vectorization techniques. Designed deep learning architectures for text classification."
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading">
        Professional <strong className="purple">Experience</strong>
      </h1>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-date-wrapper">
              <span className="timeline-date">{exp.period}</span>
            </div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4 className="purple">{exp.company}, {exp.location}</h4>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Row>
  );
}

export default Experience;