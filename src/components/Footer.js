import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="main-footer pdbottom50">
        <Container>
          <div className="footer-box-main">
            <Row>
              <Col md={12}>
                <div className="footer-box">
                  <ul>
                    <li>
                      <Link to="/home" className="nav-link ">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="nav-link ">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/product" className="nav-link ">
                        product
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="nav-link ">
                        contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="nav-link ">
                        blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-icon">
                  <ul>
                    <li>
                      <Link to="/" className="nav-link ">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link ">
                        <FaInstagramSquare />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link ">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="nav-link ">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="copyright-section">
        <Container>
          <div className="copyright-box-main">
            <Row>
              <Col md={6}>
                <div className="copyright-box">
                  <p>Copyright © 2023 Beautifo. All Rights Reserved.</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="copyright-box">
                  <ul>
                    <li>
                      <Link to="/privacy-policy" className="nav-link ">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-conditions" className="nav-link ">
                        Terms & conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/return-policy" className="nav-link ">
                        Return Policy
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

export default Footer;
