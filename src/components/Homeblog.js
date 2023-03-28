import React from "react";
import { Container, Row, Col, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import b1 from "../assets/images/blog/b1.jpg";
import b2 from "../assets/images/blog/b2.jpg";

function Homeblog() {
  return (
    <div>
      <div className="home-blog mrt50 mrb50">
        <Container>
          <div className="home-blog-main">
            <Row className="justify-content-center">
              <Col md={4}>
                <div className="home-blog-contact">
                  <div className="main_heading ">
                    <h2>The Blog</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </div>
                  <div className="main-btn-box">
                    <Link
                      to="/blog"
                      className=" nav-link main_btn text-center hvr-bounce-to-right"
                    >
                      View all
                    </Link>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className="home-blog-img-full">
                  <Row>
                    <Col md={6}>
                      <div className="blog-img-post">
                        <img
                          className="d-block w-100"
                          src={b1}
                          alt="blog Img"
                        />
                        <div className="blog-post-content">
                          <h6> Lorem Ipsum is simply dummy</h6>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* ========COLUMN END======= */}
                    <Col md={6}>
                      <div className="blog-img-post">
                        <img
                          className="d-block w-100"
                          src={b2}
                          alt="blog Img"
                        />
                        <div className="blog-post-content">
                          <h6> Lorem Ipsum is simply dummy</h6>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                          </p>
                        </div>
                      </div>
                    </Col>
                    {/* ========COLUMN END======= */}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Homeblog;
