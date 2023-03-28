import React from "react";
import {
  FaEye,
  FaCommentAlt,
  FaRegCalendarAlt,
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaSearch,
  FaPinterestP,
  FaYoutube,
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
  Pagination,
} from "react-bootstrap";
import minibanner from "../assets/images/minibanner.jpg";
import b1 from "../assets/images/blog/b1.jpg";
import b2 from "../assets/images/blog/b2.jpg";
import b3 from "../assets/images/blog/b2.jpg";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
function Blogpage() {
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
                  data-aos-duration="1500"
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
                        Most Significant Architectural Projects of the Year 2019
                      </h3>
                    </Link>
                    <div className="blog-excerpt">
                      <p>
                        Morbi volutpat nisi a ligula vestibulum placerat.
                        Suspendisse venenatis pulvinar nibh sed convallis. …
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
                    <div className="blog-btn">
                      <Link
                        to="/single-blog"
                        className="nav-link hvr-shutter-in-horizontal"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* =====BLOG BOX END===== */}
                <div
                  className="h-blog-box"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="h-blog-box-img">
                    <Link to="/" className="nav-link">
                      <img className="d-block w-100" src={b1} alt="blog" />
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
                        Most Significant Architectural Projects of the Year 2019
                      </h3>
                    </Link>
                    <div className="blog-excerpt">
                      <p>
                        Morbi volutpat nisi a ligula vestibulum placerat.
                        Suspendisse venenatis pulvinar nibh sed convallis. …
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
                    <div className="blog-btn">
                      <Link
                        to="/single-blog"
                        className="nav-link hvr-shutter-in-horizontal"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                {/* =====BLOG BOX END===== */}
                <div
                  className="h-blog-box"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="h-blog-box-img">
                    <Link to="/" className="nav-link">
                      <img className="d-block w-100" src={b2} alt="blog" />
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
                        Most Significant Architectural Projects of the Year 2019
                      </h3>
                    </Link>
                    <div className="blog-excerpt">
                      <p>
                        Morbi volutpat nisi a ligula vestibulum placerat.
                        Suspendisse venenatis pulvinar nibh sed convallis. …
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
                    <div className="blog-btn">
                      <Link
                        to="/single-blog"
                        className="nav-link hvr-shutter-in-horizontal"
                      >
                        Read More
                      </Link>
                    </div>
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
                    <Form className="d-flex header-form">
                      <Form.Control
                        type="search"
                        placeholder="Search here"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button type="" className="header-btn">
                        Search
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
                {/* ==========BOX END======= */}
                <div className="side-category ss-box">
                  <h2>Follow Us</h2>
                  <ul>
                    <ul className="footer-social-networks">
                      <li className="fb">
                        <Link to="/" className="nav-link ">
                          <FaFacebookF />
                        </Link>
                      </li>

                      <li className="lin">
                        <Link to="/" className="nav-link ">
                          <FaLinkedinIn />
                        </Link>
                      </li>
                      <li className="tw">
                        <Link to="/" className="nav-link ">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li className="pin">
                        <Link to="/" className="nav-link ">
                          <FaPinterestP />
                        </Link>
                      </li>
                      <li className="you">
                        <Link to="/" className="nav-link ">
                          <FaYoutube />
                        </Link>
                      </li>
                      <li className="ins">
                        <Link to="/" className="nav-link ">
                          <FaInstagramSquare />
                        </Link>
                      </li>
                    </ul>
                  </ul>
                </div>
                {/* ======BOX END====== */}
              </div>
            </Col>
          </Row>
          <div className="pagination-box">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item active>{10}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Container>
      </div>
      {/* ====BLOG SECTION END===== */}
    </div>
  );
}

export default Blogpage;
