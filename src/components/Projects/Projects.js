import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import classify from "../../Assets/Projects/classify.png";
import summary from "../../Assets/Projects/summary.png";
import ner from "../../Assets/Projects/ner.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import content_gen from "../../Assets/Projects/content_gen.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              title="RAG Conversational AI Chat Bot"
              description="Built RAG system using LangChain, Llama-3 (70B/8B), and ChromaDB via Groq API for context-aware responses. Designed Streamlit/FastAPI document QA system with dynamic model switching across 8 Llama-3 variants."
              demoLink="https://huggingface.co/spaces/yuvarajareddy001/RAG_ChatBot_Yuvaraj"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={content_gen}
              title="Content Generator Using LLM"
              description="Built LLM-driven content generator using Llama-3-70B and Groq API, automating LinkedIn post creation with customization. Engineered metadata extraction pipeline with LangChain and JSON parsing."
              demoLink="https://huggingface.co/spaces/yuvarajareddy001/Content_Generator_Using_LLM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ner}
              title="Medical NER System"
              description="Developed medical NER model using spaCy Transition-Based Parser, achieving 85% F1-score on 10+ entity types. Built multi-format text extractor supporting PDF/DOCX/images via PyMuPDF and Tesseract OCR."
              demoLink="https://huggingface.co/spaces/yuvarajareddy001/medical-ner-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={classify}
              title="News Document Category Classification"
              description="Developed multi-class classifier using Word2Vec embeddings and Random Forest, achieving 97.5% test accuracy on news dataset. Optimized NLP pipeline with Gensim's Word2Vec and custom sentence vectorization."
              demoLink="https://huggingface.co/spaces/yuvarajareddy001/news_doc_classification_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              title="YouTube Comment Sentiment Analyzer"
              description="System accepts YouTube URLs, fetches comments via YouTube Data API, and uses multilingual DistilBERT for sentiment analysis. Results visualized via Matplotlib pie charts with real-time updates."
              demoLink="https://huggingface.co/spaces/yuvarajareddy001/youtube_comments_sentiment"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={summary}
              title="Document Summarization AI"
              description="System ingests BBC news articles, preprocesses text using NLTK, and uses Universal Sentence Encoder for semantic similarity. PageRank algorithm identifies top-5 salient sentences for summarization."
              demoLink="https://huggingface.co/spaces/yuvarajareddy001/Doc_Summarizer_App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;