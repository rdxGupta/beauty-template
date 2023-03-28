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

function Singleproduct() {
  return (
    <div>
      <div
        className="mini-banner"
        style={{ backgroundImage: `url(${minibanner})` }}
      >
        <Container>
          <div className="our-breadcum">
            <h1>Products</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Product</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </div>
      <div className="single-product-section">
        <Container>
          <div className="single-product-full mrt50 mrb50">
            <Row>
              <Col xs={12} md={6}>
                <div className="single-product-img-box">
                  <img className="d-block w-100" src={p3} alt="product img" />
                </div>
              </Col>

              <Col xs={12} md={6}>
                <div className="single-product-description-box">
                  <div className="single-product-box">
                    <div className="product-box-content">
                      <h5>Lorem Ipsum </h5>
                      <p>
                        Etiam consequat sem ullamcorper, euismod metus sit amet,
                        tristique justo. Vestibulum mattis, nisi ut faucibus
                        commodo, risus ex commodo.
                      </p>
                      <p className="price-box ">
                        <span>
                          <FaDollarSign />
                        </span>
                        111.00
                      </p>
                    </div>
                  </div>
                  <div className="hproducts-thumb">
                    <div className="h-product-content">
                      <div className="product-add-box">
                        <p className="price-box ">
                          <Form className="">
                            <Form.Control
                              type="text"
                              placeholder="number here"
                            />
                          </Form>
                          {/* <InputNumber defaultValue={10} /> */}
                        </p>

                        <Link
                          to="/"
                          className="nav-link hvr-bounce-to-right main_btn"
                        >
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="single-product-descr-section mrb50">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>More info</Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Reviews (1)</Accordion.Header>
                        <Accordion.Body>
                          <div className="review-single">
                            <p>There are no reviews yet.</p>
                            <ul>
                              <li>
                                <Link to="/" className="nav-link">
                                  <FaStar />
                                </Link>
                              </li>
                              <li>
                                <Link to="/" className="nav-link">
                                  <FaStar />
                                </Link>
                              </li>
                              <li>
                                <Link to="/" className="nav-link">
                                  <FaStar />
                                </Link>
                              </li>
                              <li>
                                <Link to="/" className="nav-link">
                                  <FaStar />
                                </Link>
                              </li>
                              <li>
                                <Link to="/" className="nav-link">
                                  <FaStarHalfAlt />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Category</Accordion.Header>
                        <Accordion.Body>
                          <p>Skin</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className="single-related-product-section mrb50">
        <Container>
          <div className="single-related-box">
            <div className="main_heading text-center">
              <h2>Related products</h2>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Singleproduct;
