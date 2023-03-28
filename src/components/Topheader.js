import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaRegEnvelopeOpen,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Topheader() {
  return (
    <div>
      <div className="topheader-section">
        <Container>
          <div className="top-main">
            <Row className="">
              <Col md={6}>
                <div className="left-top">
                  <ul>
                    <li>
                      <Link to="/" className="nav-link ">
                        <span>
                          <FaRegEnvelopeOpen />
                        </span>
                        example@gmail.com
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link ">
                        <span>
                          <FaMapMarkerAlt />
                        </span>
                        121 King Street, Melbourne, Australia
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={6}>
                <div className="right-top">
                  <ul>
                    <li>
                      <Link to="/" className="nav-link ">
                        <span>
                          <FaFacebookF />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link ">
                        <span>
                          <FaInstagramSquare />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link ">
                        <span>
                          <FaLinkedinIn />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link ">
                        <span>
                          <FaTwitter />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Topheader;
