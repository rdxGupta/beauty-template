import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import banner1 from "../assets/images/banner/banner-bg2.png";
import banner2 from "../assets/images/banner/banner-bg1.png";
function Bannerslider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
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
      <div className="banner-slider-section">
        <Slider {...settings}>
          <div>
            <div className="main-slide-box ">
              <div
                className="slider-item"
                style={{ backgroundImage: `url(${banner1})` }}
              >
                <Container>
                  <div className="banner-content-box-full">
                    <Row>
                      <Col md={6}>
                        <div className="banner-content-box">
                          <h3> Lorem Ipsum is simply dummy</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's
                          </p>
                          <div className="main-btn-box">
                            <Link
                              to="/about"
                              className="main_btn text-center hvr-bounce-to-right"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </div>
          </div>
          {/* ======SLIDER ITEM END====== */}
          <div>
            <div className="main-slide-box ">
              <div
                className="slider-item"
                style={{ backgroundImage: `url(${banner2})` }}
              >
                <Container>
                  <div className="banner-content-box-full">
                    <Row>
                      <Col md={6}>
                        <div className="banner-content-box">
                          <h3> Lorem Ipsum is simply dummy</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's
                          </p>
                          <div className="main-btn-box">
                            <Link
                              to="/about"
                              className="main_btn text-center hvr-bounce-to-right"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Container>
              </div>
            </div>
          </div>
          {/* ======SLIDER ITEM END====== */}
        </Slider>
      </div>
    </div>
  );
}

export default Bannerslider;
