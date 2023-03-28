import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelopeOpen, FaMapMarked, FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contactadd() {
  return (
    <div>
      <div className="contact-address-section">
        <Container>
          <div className="contact-address-main">
            <Row>
              <Col md={4}>
                <div className="contact-address-box">
                  <div className="contact-icon">
                    <FaMapMarked />
                  </div>
                  <div className="contact-details">
                    <h5>example Address</h5>
                    <p>Example Street, Example</p>
                  </div>
                </div>
              </Col>
              {/* =======column END======= */}

              <Col md={4}>
                <div className="contact-address-box">
                  <div className="contact-icon">
                    <FaEnvelopeOpen />
                  </div>
                  <div className="contact-details">
                    <h5>Email Us</h5>
                    <p>
                      <Link to="/" className="nav-link ">
                        example@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
              {/* =======column END======= */}
              <Col md={4}>
                <div className="contact-address-box">
                  <div className="contact-icon">
                    <FaPhoneVolume />
                  </div>
                  <div className="contact-details">
                    <h5>Phone Numbe</h5>
                    <p>
                      {" "}
                      <Link to="/" className="nav-link ">
                        +96 111-222-3456
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
              {/* =======column END======= */}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contactadd;
