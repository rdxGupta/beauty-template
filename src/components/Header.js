import React, { useState } from "react";
import {
  Button,
  Nav,
  Navbar,
  Container,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { FaCartArrowDown, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
function Header() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <div>
      <div className="main-header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              <img
                className="d-block w-100 logoimg"
                src={logo}
                alt="logo Img"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 header-menu"
                // style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link to="/home" className="nav-link ">
                  Home
                </Link>
                <Link to="/about" className="nav-link ">
                  About
                </Link>
                <Link to="/product" className="nav-link ">
                  Product
                </Link>
                <Link to="/contact" className="nav-link ">
                  Contact
                </Link>
                {/* <Nav.Link href="#action1"></Nav.Link>
                <Nav.Link href="#action2"></Nav.Link>
                <Nav.Link href="#action2">Shop</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link> */}
                <NavDropdown
                  title="Shop"
                  id="navbarScrollingDropdown"
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <Link to="/product" className="dropdown-item">
                    Hair
                  </Link>
                  <Link to="/product" className="dropdown-item">
                    skin
                  </Link>
                </NavDropdown>
                <Link to="/blog" className="nav-link ">
                  blog
                </Link>
              </Nav>
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

              <div className="d-flex header-sicon">
                <ul>
                  <li>
                    <Link to="/" className="nav-link">
                      <FaRegHeart />
                      <span>1</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="nav-link">
                      <FaCartArrowDown />
                      <span>0</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
