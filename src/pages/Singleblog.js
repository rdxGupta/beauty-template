import React from "react";
import {
  FaEye,
  FaCommentAlt,
  FaRegCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Nav,
  Breadcrumb,
} from "react-bootstrap";
import minibanner from "../assets/images/minibanner.jpg";
import b1 from "../assets/images/blog/b1.jpg";
import b2 from "../assets/images/blog/b2.jpg";
import b3 from "../assets/images/blog/b2.jpg";

function Singleblog() {
  return (
    <div>
      <div
        className="mini-banner"
        style={{ backgroundImage: `url(${minibanner})` }}
      >
        <Container>
          <div className="our-breadcum">
            <h1>Blog</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Blog</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </div>
      <div className="single-blog-section">
        {/* ====BLOG SECTION START===== */}
        <div className="blog-page-section">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <div className="blog-page-full">
                  <div
                    className="h-blog-box"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500"
                  >
                    <div className="h-blog-box-img">
                      <Link to="/" className="nav-link">
                        <img className="d-block w-100" src={b3} alt="blog" />
                      </Link>
                    </div>
                    <div className="h-blog-box-content">
                      <div class="blog-headline">
                        <Link to="/" className="nav-link ltx-date">
                          <span className="dt">December 9, 2022</span>
                        </Link>

                        <span className="blog-cats">
                          <Link to="/" className="nav-link">
                            Architechture
                          </Link>
                        </span>
                      </div>
                      <Link to="/" className="nav-link blog-heading">
                        <h3>
                          Most Significant Architectural Projects of the Year
                          2019
                        </h3>
                      </Link>
                      <div className="blog-excerpt">
                        <p>
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis. …
                        </p>
                        <p>
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                        </p>
                        <p>
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                        </p>
                        <h3>Most Significant Architectural</h3>
                        <p>
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                          Morbi volutpat nisi a ligula vestibulum placerat.
                          Suspendisse venenatis pulvinar nibh sed convallis.
                        </p>
                      </div>

                      <ul className="blog-info">
                        <li>
                          <span>
                            <FaEye />
                            13
                          </span>
                        </li>
                        <li>
                          <span>
                            <FaCommentAlt />
                            11
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* =====BLOG BOX END===== */}
                </div>
              </Col>
              {/* =======COLUMN 8 END===== */}
              <Col xs={12} md={4}>
                <div className="blog-page-sidebar">
                  <div className="side-search ss-box">
                    <h2>Search</h2>
                    <Nav className="header-icon">
                      <Form>
                        <Form.Group
                          className="search-form"
                          controlId="formBasicEmail"
                        >
                          <Form.Control type="email" placeholder="Search" />
                        </Form.Group>

                        <Button type="submit">
                          <FaSearch />
                        </Button>
                      </Form>
                    </Nav>
                  </div>
                  {/* ======BOX END====== */}
                  <div className="side-category ss-box">
                    <h2>Categories</h2>
                    <ul>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Construction
                        </Link>
                        <span>3</span>
                      </li>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Factory
                        </Link>
                        <span>3</span>
                      </li>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Industrial
                        </Link>
                        <span>3</span>
                      </li>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Interior
                        </Link>
                        <span>3</span>
                      </li>
                      <li className="cat-item">
                        <Link to="/" className="nav-link">
                          Uncategorized
                        </Link>
                        <span>3</span>
                      </li>
                    </ul>
                  </div>
                  {/* ======BOX END====== */}
                  <div className="side-recent ss-box">
                    <h2>Recent Post</h2>
                    <div className="media">
                      <img className="d-block w-100" src={b1} alt="blog" />
                      <div className="media-body">
                        <h5 className="mt-0">Media heading</h5>
                        <Link to="/" className="nav-link">
                          <FaRegCalendarAlt /> june 30, 2023
                        </Link>
                      </div>
                    </div>
                    <div className="media">
                      <img className="d-block w-100" src={b2} alt="blog" />
                      <div className="media-body">
                        <h5 className="mt-0">Media heading</h5>
                        <Link to="/" className="nav-link">
                          <FaRegCalendarAlt /> May 30, 2019
                        </Link>
                      </div>
                    </div>

                    <div className="media">
                      <img className="d-block w-100" src={b3} alt="blog" />
                      <div className="media-body">
                        <h5 className="mt-0">Media heading</h5>
                        <Link to="/" className="nav-link">
                          <FaRegCalendarAlt /> May 30, 2023
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ====BLOG SECTION END===== */}
      </div>
    </div>
  );
}

export default Singleblog;
