import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import t1 from "../assets/images/team/t1.png";
import t2 from "../assets/images/team/t2.png";
import t3 from "../assets/images/team/t3.png";
function Team() {
  return (
    <div>
      <div className="main-team pdbottom50">
        <Container>
          <div className="team-box-main">
            <Row className="justify-content-center">
              <Col md={8}>
                <div className="main_heading text-center">
                  <h2>Our Specialist</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={4}>
                <div className="team-box">
                  <img className="d-block w-100" src={t1} alt="Team Img" />
                  <div className="content">
                    <h3>Lorem Ipsum </h3>
                    <p>Lorem Ipsum has been the industry's standard</p>
                  </div>
                </div>
              </Col>
              {/* ======COLUMN END====== */}
              <Col md={4}>
                <div className="team-box">
                  <img className="d-block w-100" src={t2} alt="Team Img" />
                  <div className="content">
                    <h3>Lorem Ipsum </h3>
                    <p>Lorem Ipsum has been the industry's standard</p>
                  </div>
                </div>
              </Col>
              {/* ======COLUMN END====== */}
              <Col md={4}>
                <div className="team-box">
                  <img className="d-block w-100" src={t3} alt="Team Img" />
                  <div className="content">
                    <h3>Lorem Ipsum </h3>
                    <p>Lorem Ipsum has been the industry's standard</p>
                  </div>
                </div>
              </Col>
              {/* ======COLUMN END====== */}
              <Col md={2}>
                <div className="main-btn-box">
                  <Link
                    to="/about"
                    className="main_btn text-center hvr-bounce-to-right"
                  >
                    View all
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Team;
