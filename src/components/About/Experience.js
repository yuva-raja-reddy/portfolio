// Experience.js
import React from "react";
import { Row } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      period: "Aug 2024 – Present",
      role: "Data Scientist (AI/ML Engineer)",
      company: "BCBSA",
      location: "Remote / USA",
      description: "Conducted statistical analysis and predictive modeling to improve workflows by 20%, developed GPT-like LLM prototypes achieving 10% efficiency gains, built scalable MLOps platforms ensuring 99.9% uptime on AWS, implemented prompt engineering for 15% content cost reduction, designed ingestion pipelines with AWS S3/Glue/Athena for medical data, and optimized ML models reducing size by 60% while maintaining accuracy."
    },
    {
      period: "Jan 2021 - Jan 2023",
      role: "Data Scientist Analyst",
      company: "Accenture AI",
      location: "Bengaluru, India",
      description: "Led end-to-end NLP pipeline development for aviation insurance underwriting, achieving 92% accuracy. Collaborated with computer vision team to preprocess 5K+ scanned documents using OCR. Built decision tree classifier automating 80% of insurance decisions. Designed cross-sell recommender system increasing upsell conversion by 35%."
    },
    {
      period: "May 2020 – Dec 2020",
      role: "Data Analyst",
      company: "Skyline Infrastructure",
      location: "Remote / India",
      description: "Queried and analyzed large datasets using SQL, built dashboards to monitor KPIs, recommended operational improvements, developed resource allocation models improving project delivery by 15%, performed financial market research, and conducted risk and sensitivity analysis to support strategic decision-making."
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