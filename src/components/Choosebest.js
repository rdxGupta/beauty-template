import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import chooseimg from "../assets/images/banner/bg1.webp";

function Choosebest() {
  return (
    <div>
      <div className="choose-section">
        <div
          className="choose-main"
          style={{ backgroundImage: `url(${chooseimg})` }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col md={7}>
                <h1>
                  choose <span>the best</span> Product
                </h1>
                <h5>Making your treatments comfortable and fun </h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's
                </p>
                <div className="main-btn-box">
                  <Link
                    to="/product"
                    className=" nav-link main_btn text-center hvr-bounce-to-right"
                  >
                    Shop Now
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Choosebest;
