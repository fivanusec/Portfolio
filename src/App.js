import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import Navigation from "./components/Navbar";
import img from "./img/Masnoca.jpg";
import img2 from "./img/Druga.jpg";
import { fetchApi } from "./helper/fetchData";
import RepoCard from "./components/RepoCard";

const importAllImages = (r) => {
  return r.keys().map(r);
};

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchApi().then(setData);
  }, []);

  const images = importAllImages(
    require.context("./img", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <>
      <Navigation />
      <Container fluid className="main-container" id="home">
        <Container className="home-container">
          <Row>
            <Col>
              <Container className="typed-container">
                <h1 className="typed-text">Hello! my name is Filip!</h1>
                <h3 className="small-text">
                  And I am student, photographer and software developer.
                </h3>
              </Container>
              <Container className="social-container">
                <Button className="social-btn" variant="outline-primary">
                  <a href="https://www.instagram.com/ivanusecfilip/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </Button>
                <Button className="social-btn" variant="outline-primary">
                  <a href="https://github.com/fivanusec">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </Button>
                <Button className="social-btn" variant="outline-primary">
                  <a href="https://twitter.com/fivanusec">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Button>
                <Button className="social-btn" variant="outline-primary">
                  <a href="mailto:fivanusec@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </Button>
              </Container>
            </Col>
            <Col>
              <img
                className="pic"
                src={img}
                alt="From one simple night shooting long exposure"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="about-me-container" id="aboutme">
        <Container className="about-me-data">
          <Row>
            <Col>
              <img
                className="pic"
                src={img2}
                alt="From one simple night shooting long exposure"
              />
            </Col>
            <Col style={{ marginTop: "2rem" }}>
              <h1 className="about-me-title">About me</h1>
              <p style={{ marginTop: "2rem" }}>
                My name is Filip and I am a Croatian based student, musician,
                photographer and software developer. I started my journey at the
                age of 18 when I first learned programming working on Arduino
                and Arduino-based systems. Why Arduino? I went to engineering
                school and studied electrical engineering. After I finished In
                high school, I started college for electrical engineering and
                along the way, I found that I was more into software than into
                electrical engineering so I decided to switch college to
                telematics which I found to be more fun and challenging than
                electrical engineering.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="projects-container" id="projects">
        <Container className="projects-data">
          <Row>
            <Col>
              <h1>Projects</h1>
              <p style={{ marginTop: "1rem" }}>
                I mostly code in Typescript/Javascript, but sometimes I want to
                reconnect with my starting point so I code in C/C++ for fun
                because I love low-level stuff, but for speed and quick small
                projects I mostly use Python as I love the simplicity and how
                fast you can write and execute Python script.
              </p>
              <p>
                I mostly do fullstack stuff as most of the projects I do are
                full stack and I find fun in doing that.
              </p>
            </Col>
            <Col>
              <h3 style={{ marginLeft: "5rem" }}>My tech stack</h3>
              <ol className="tech-stack-list">
                <li>React</li>
                <li>Express</li>
                <li>Typeorm</li>
              </ol>
            </Col>
            <Col>
              <ol className="tech-stack-list">
                <li>GraphQL</li>
                <li>Electron</li>
                <li>Flask</li>
                <li>Django</li>
              </ol>
            </Col>
          </Row>
          <Row style={{ marginTop: "2rem" }}>
            <Col>
              <h1>My work</h1>
            </Col>
          </Row>
          <Row className="repo-card-container">
            {data.map((d) => (
              <>
                <Col style={{ marginTop: "1rem" }}>
                  <RepoCard data={d} />
                </Col>
              </>
            ))}
            {data.length % 2 === 0 ? (
              <>
                <Col>
                  <RepoCard
                    data={{
                      name: "To be added",
                      description: "This will be some cool project",
                    }}
                  />
                </Col>
              </>
            ) : null}
          </Row>
        </Container>
      </Container>
      <Carousel id="photography">
        {images.map((img) => (
          <Carousel.Item>
            <img
              style={{ width: "120rem", height: "50rem" }}
              src={img.default}
              alt="My photography work"
            />
          </Carousel.Item>
        ))}
        <Carousel.Caption>
          <h3>My photography work</h3>
          <p>This is some of my photography work that I done over the years.</p>
        </Carousel.Caption>
      </Carousel>
      <Container fluid className="contact-container" id="contact">
        <Container className="contact-text">
          <h1 className="contact-header">Contact me</h1>
          <p>
            If you want to contact me and hit me with some ideas you can contact
            me here! Or send me an email directly to: fivanusec@gmail.com
          </p>
        </Container>
        <Container className="contact-button">
          <div className="d-grid gap-2">
            <Button
              size="lg"
              className="social-btn-big"
              variant="outline-primary"
            >
              <a href="mailto:fivanusec@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default App;
