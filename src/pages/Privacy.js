import React from "react";
import {
  FaRegHeart,
  FaCartArrowDown,
  FaLongArrowAltRight,
  FaStar,
  FaStarHalfAlt,
  FaSearch,
  FaDollarSign,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Tabs,
  Tab,
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Breadcrumb,
  Pagination,
  Accordion,
} from "react-bootstrap";
// import InputNumber from "rc-input-number";
import minibanner from "../assets/images/minibanner.jpg";
import p3 from "../assets/images/product/p3.jpg";

function Privacy() {
  return (
    <div>
      <div
        className="mini-banner"
        style={{ backgroundImage: `url(${minibanner})` }}
      >
        <Container>
          <div className="our-breadcum">
            <h1>Privacy & Policy</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Privacy & Policy</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </div>

      <div className="privacy-section">
        <Container>
          <div className="privacy-full mrt50 mrb50">
            <Row>
              <Col xs={12} md={12}>
                <div className="privacy-box">
                  <h5>Who we are</h5>
                  <p>
                    Etiam consequat sem ullamcorper, euismod metus sit amet,
                    tristique justo. Vestibulum mattis, nisi ut faucibus
                    commodo, risus ex commodo. Etiam consequat sem ullamcorper,
                    euismod metus sit amet, tristique justo. Vestibulum mattis,
                    nisi ut faucibus commodo, risus ex commodo.
                  </p>
                </div>
              </Col>

              <Col xs={12} md={12}>
                <div className="privacy-box">
                  <h5>What personal data we collect and why we collect it</h5>
                  <h6>Comments</h6>
                  <p>
                    Etiam consequat sem ullamcorper, euismod metus sit amet,
                    tristique justo. Vestibulum mattis, nisi ut faucibus
                    commodo, risus ex commodo. Etiam consequat sem ullamcorper,
                    euismod metus sit amet, tristique justo. Vestibulum mattis,
                    nisi ut faucibus commodo, risus ex commodo.
                  </p>
                  <h6>Media</h6>
                  <p>
                    Etiam consequat sem ullamcorper, euismod metus sit amet,
                    tristique justo. Vestibulum mattis, nisi ut faucibus
                    commodo, risus ex commodo. Etiam consequat sem ullamcorper,
                    euismod metus sit amet, tristique justo. Vestibulum mattis,
                    nisi ut faucibus commodo, risus ex commodo.
                  </p>
                </div>
              </Col>

              <Col xs={12} md={12}>
                <div className="privacy-box">
                  <h5>Cookies</h5>
                  <p>
                    Etiam consequat sem ullamcorper, euismod metus sit amet,
                    tristique justo. Vestibulum mattis, nisi ut faucibus
                    commodo, risus ex commodo. Etiam consequat sem ullamcorper,
                    euismod metus sit amet, tristique justo. Vestibulum mattis,
                    nisi ut faucibus commodo, risus ex commodo.
                  </p>
                </div>
              </Col>

              <Col xs={12} md={12}>
                <div className="privacy-box">
                  <h5>Embedded content from other websites</h5>
                  <p>
                    Etiam consequat sem ullamcorper, euismod metus sit amet,
                    tristique justo. Vestibulum mattis, nisi ut faucibus
                    commodo, risus ex commodo. Etiam consequat sem ullamcorper,
                    euismod metus sit amet, tristique justo. Vestibulum mattis,
                    nisi ut faucibus commodo, risus ex commodo.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Privacy;
