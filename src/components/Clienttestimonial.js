import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import t1 from "../assets/images/testimonial/t1.png";
import t2 from "../assets/images/testimonial/t2.png";

function Clienttestimonial() {
  var Tsettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="testimonial-section">
        <Container>
          <div className="testimonial-main">
            <Row>
              <Col md={3}>
                <div className="testimonial-box">
                  <div className="main_heading">
                    <h2>Clients Say</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </div>
                </div>
              </Col>
              {/* ========COLUMN END======== */}
              <Col md={9}>
                <div className="testimonial-slider">
                  <Slider {...Tsettings}>
                    <div>
                      <div className="testimonial-slide-boxfl ">
                        <div className="testimonial-slide-box ">
                          <div className="testimonial-img-box">
                            <img
                              className="d-block w-100"
                              src={t1}
                              alt="Testimonal Img"
                            />
                          </div>
                          <div className="testimonial-box-full">
                            <Row>
                              <Col md={12}>
                                <div className="testimonial-content-box">
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's Lorem Ipsum is
                                    simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been
                                    the industry's
                                  </p>
                                  <h3> Lorem Ipsum </h3>
                                  <span>Customer</span>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ======SLIDER ITEM END====== */}
                    <div>
                      <div className="testimonial-slide-boxfl ">
                        <div className="testimonial-slide-box ">
                          <div className="testimonial-img-box">
                            <img
                              className="d-block w-100"
                              src={t2}
                              alt="Testimonal Img"
                            />
                          </div>
                          <div className="testimonial-box-full">
                            <Row>
                              <Col md={12}>
                                <div className="testimonial-content-box">
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's Lorem Ipsum is
                                    simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been
                                    the industry's
                                  </p>
                                  <h3> Lorem Ipsum </h3>
                                  <span>Customer</span>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ======SLIDER ITEM END====== */}
                    <div>
                      <div className="testimonial-slide-boxfl ">
                        <div className="testimonial-slide-box ">
                          <div className="testimonial-img-box">
                            <img
                              className="d-block w-100"
                              src={t1}
                              alt="Testimonal Img"
                            />
                          </div>
                          <div className="testimonial-box-full">
                            <Row>
                              <Col md={12}>
                                <div className="testimonial-content-box">
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's Lorem Ipsum is
                                    simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been
                                    the industry's
                                  </p>
                                  <h3> Lorem Ipsum </h3>
                                  <span>Customer</span>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ======SLIDER ITEM END====== */}
                    <div>
                      <div className="testimonial-slide-boxfl ">
                        <div className="testimonial-slide-box ">
                          <div className="testimonial-img-box">
                            <img
                              className="d-block w-100"
                              src={t2}
                              alt="Testimonal Img"
                            />
                          </div>
                          <div className="testimonial-box-full">
                            <Row>
                              <Col md={12}>
                                <div className="testimonial-content-box">
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's Lorem Ipsum is
                                    simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been
                                    the industry's
                                  </p>
                                  <h3> Lorem Ipsum </h3>
                                  <span>Customer</span>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ======SLIDER ITEM END====== */}
                  </Slider>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Clienttestimonial;
