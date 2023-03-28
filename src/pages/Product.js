import React from "react";
import { Container, Breadcrumb, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaDollarSign, FaRegHeart } from "react-icons/fa";
import minibanner from "../assets/images/minibanner.jpg";
import p1 from "../assets/images/product/p1.jpg";
import p2 from "../assets/images/product/p2.jpg";
import p3 from "../assets/images/product/p3.jpg";

function Product() {
  return (
    <div>
      <div
        className="mini-banner"
        style={{ backgroundImage: `url(${minibanner})` }}
      >
        <Container>
          <div className="our-breadcum">
            <h1>Product</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Product</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </div>

      <div className="product-page-full mrt50 mrb50">
        <div className="home-product">
          <Container>
            <div className="home-product-main">
              <Row className="justify-content-center">
                <Col md={8}>
                  <div className="main_heading text-center ">
                    <h2>Highlighted Products</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={4}>
                  <Link to="/single-product" className="nav-link ">
                    <div className="home-product-box">
                      <div className="product-img-box">
                        <img
                          className="d-block w-100"
                          src={p1}
                          alt="product Img"
                        />
                      </div>
                      <div className="product-add-box">
                        <Link to="/" className="nav-link ">
                          Add to cart
                        </Link>
                        <Link to="/" className="nav-link ">
                          <FaRegHeart />
                        </Link>
                      </div>
                      <div className="product-box-content">
                        <p> has been Lorem Ipsum Ipsum has been has been</p>
                        <h6>Lorem Ipsum </h6>
                        <p className="price-box ">
                          <span>
                            <FaDollarSign />
                          </span>
                          111.00
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                {/* ======COLUMN END===== */}
                <Col md={4}>
                  <Link to="/single-product" className="nav-link ">
                    <div className="home-product-box">
                      <div className="product-img-box">
                        <img
                          className="d-block w-100"
                          src={p2}
                          alt="product Img"
                        />
                      </div>
                      <div className="product-add-box">
                        <Link to="/" className="nav-link ">
                          Add to cart
                        </Link>
                        <Link to="/" className="nav-link ">
                          <FaRegHeart />
                        </Link>
                      </div>
                      <div className="product-box-content">
                        <p> has been Lorem Ipsum Ipsum has been has been</p>
                        <h6>Lorem Ipsum </h6>
                        <p className="price-box ">
                          <span>
                            <FaDollarSign />
                          </span>
                          111.00
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                {/* ======COLUMN END===== */}
                <Col md={4}>
                  <Link to="/single-product" className="nav-link ">
                    <div className="home-product-box">
                      <div className="product-img-box">
                        <img
                          className="d-block w-100"
                          src={p3}
                          alt="product Img"
                        />
                      </div>
                      <div className="product-add-box">
                        <Link to="/" className="nav-link ">
                          Add to cart
                        </Link>

                        <Link to="/" className="nav-link ">
                          <FaRegHeart />
                        </Link>
                      </div>
                      <div className="product-box-content">
                        <p> has been Lorem Ipsum Ipsum has been has been</p>
                        <h6>Lorem Ipsum </h6>
                        <p className="price-box ">
                          <span>
                            <FaDollarSign />
                          </span>
                          111.00
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                {/* ======COLUMN END===== */}
                <Col md={4}>
                  <Link to="/single-product" className="nav-link ">
                    <div className="home-product-box">
                      <div className="product-img-box">
                        <img
                          className="d-block w-100"
                          src={p1}
                          alt="product Img"
                        />
                      </div>
                      <div className="product-add-box">
                        <Link to="/" className="nav-link ">
                          Add to cart
                        </Link>
                        <Link to="/" className="nav-link ">
                          <FaRegHeart />
                        </Link>
                      </div>
                      <div className="product-box-content">
                        <p> has been Lorem Ipsum Ipsum has been has been</p>
                        <h6>Lorem Ipsum </h6>
                        <p className="price-box ">
                          <span>
                            <FaDollarSign />
                          </span>
                          111.00
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                {/* ======COLUMN END===== */}
                <Col md={4}>
                  <Link to="/single-product" className="nav-link ">
                    <div className="home-product-box">
                      <div className="product-img-box">
                        <img
                          className="d-block w-100"
                          src={p2}
                          alt="product Img"
                        />
                      </div>
                      <div className="product-add-box">
                        <Link to="/" className="nav-link ">
                          Add to cart
                        </Link>
                        <Link to="/" className="nav-link ">
                          <FaRegHeart />
                        </Link>
                      </div>
                      <div className="product-box-content">
                        <p> has been Lorem Ipsum Ipsum has been has been</p>
                        <h6>Lorem Ipsum </h6>
                        <p className="price-box ">
                          <span>
                            <FaDollarSign />
                          </span>
                          111.00
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                {/* ======COLUMN END===== */}
                <Col md={4}>
                  <Link to="/single-product" className="nav-link ">
                    <div className="home-product-box">
                      <div className="product-img-box">
                        <img
                          className="d-block w-100"
                          src={p2}
                          alt="product Img"
                        />
                      </div>
                      <div className="product-add-box">
                        <Link to="/" className="nav-link ">
                          Add to cart
                        </Link>
                        <Link to="/" className="nav-link ">
                          <FaRegHeart />
                        </Link>
                      </div>
                      <div className="product-box-content">
                        <p> has been Lorem Ipsum Ipsum has been has been</p>
                        <h6>Lorem Ipsum </h6>
                        <p className="price-box ">
                          <span>
                            <FaDollarSign />
                          </span>
                          111.00
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                {/* ======COLUMN END===== */}
                <Col md={4}>
                  <Link to="/single-product" className="nav-link ">
                    <div className="home-product-box">
                      <div className="product-img-box">
                        <img
                          className="d-block w-100"
                          src={p2}
                          alt="product Img"
                        />
                      </div>
                      <div className="product-add-box">
                        <Link to="/" className="nav-link ">
                          Add to cart
                        </Link>
                        <Link to="/" className="nav-link ">
                          <FaRegHeart />
                        </Link>
                      </div>
                      <div className="product-box-content">
                        <p> has been Lorem Ipsum Ipsum has been has been</p>
                        <h6>Lorem Ipsum </h6>
                        <p className="price-box ">
                          <span>
                            <FaDollarSign />
                          </span>
                          111.00
                        </p>
                      </div>
                    </div>
                  </Link>
                </Col>
                {/* ======COLUMN END===== */}
              </Row>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Product;
