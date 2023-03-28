import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaUserFriends, FaWallet } from "react-icons/fa";
import ab1 from "../assets/images/about/about.jpg";
function About() {
  return (
    <div>
      <div className="main-about pdtop50 pdbottom50">
        <Container>
          <div className="about-box-main">
            <div className="about-box-main-full">
              <Row className="justify-content-center">
                <Col md={9}>
                  <div className="main_heading text-center">
                    <h2>Why Choose Us?</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      standard dummy text ever since the 1500s, when an unknown
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="about-box-main-full-content">
              <Row className="justify-content-center">
                <Col md={6}>
                  <div className="about-main-content">
                    <Row>
                      <Col md={6}>
                        <div className="about-icon-box">
                          <div className="featured-icon">
                            <FaKey />
                          </div>
                          <div className="icon-box-content">
                            <h4>High Security</h4>
                            <p>
                              Senectus justo malesuada condimentum imperdiet
                            </p>
                          </div>
                        </div>
                      </Col>
                      {/* ====== INNER COLUMN END====== */}
                      <Col md={6}>
                        <div className="about-icon-box">
                          <div className="featured-icon">
                            <FaUserFriends />
                          </div>
                          <div className="icon-box-content">
                            <h4>Skilled Team</h4>
                            <p>
                              Senectus justo malesuada condimentum imperdiet
                            </p>
                          </div>
                        </div>
                      </Col>
                      {/* ====== INNER COLUMN END====== */}
                      <Col md={6}>
                        <div className="about-icon-box">
                          <div className="featured-icon">
                            <FaWallet />
                          </div>
                          <div className="icon-box-content">
                            <h4>Affordable Price</h4>
                            <p>
                              Senectus justo malesuada condimentum imperdiet
                            </p>
                          </div>
                        </div>
                      </Col>
                      {/* ====== INNER COLUMN END====== */}
                      <Col md={6}>
                        <div className="about-icon-box">
                          <div className="featured-icon">
                            <FaKey />
                          </div>
                          <div className="icon-box-content">
                            <h4>24/7 Support</h4>
                            <p>
                              Senectus justo malesuada condimentum imperdiet
                            </p>
                          </div>
                        </div>
                      </Col>
                      {/* ====== INNER COLUMN END====== */}
                    </Row>
                  </div>
                </Col>
                {/* ======COLUMN END====== */}
                <Col md={6}>
                  <div className="about-img-full">
                    <img className="d-block w-100" src={ab1} alt="About Img" />
                  </div>
                </Col>
                {/* ======COLUMN END====== */}
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default About;
