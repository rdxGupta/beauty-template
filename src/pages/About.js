import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import minibanner from "../assets/images/minibanner.jpg";
import av1 from "../assets/images/about/about-value.jpg";
import av2 from "../assets/images/about/about-value-2.jpg";
import Team from "../components/Team";
import Clienttestimonial from "../components/Clienttestimonial";

function About() {
  return (
    <div>
      <div
        className="mini-banner"
        style={{ backgroundImage: `url(${minibanner})` }}
      >
        <Container>
          <div className="our-breadcum">
            <h1>About Us</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>About Us</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </div>

      <div className="about-value-section mrt50 mrb50">
        <Container>
          <div className="about-value-main">
            <Row>
              <Col md={7}>
                <div className="about-value-box">
                  <div className="main_heading">
                    <h2>What we value</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </div>
                  <div className="about-img-box">
                    <img className="d-block w-100" src={av1} alt="about Img" />
                  </div>
                </div>
              </Col>
              {/* ========COLUMN END======== */}
              <Col md={4}>
                <div className="about-value-box">
                  <div className="about-img-box">
                    <img className="d-block w-100" src={av2} alt="about Img" />
                  </div>
                  <div className="main_heading mt-4">
                    <p>
                      Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <h6>Ipsum has</h6>
                    <span>Funder Of Beautain</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="about-team-page mrt50">
          <Team />
          <Clienttestimonial />
        </div>
      </div>
    </div>
  );
}

export default About;
