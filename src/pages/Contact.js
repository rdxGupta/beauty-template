import React from "react";
import { Container, Row, Col, Breadcrumb, Form, Button } from "react-bootstrap";
import minibanner from "../assets/images/minibanner.jpg";
import av1 from "../assets/images/contact.jpg";
import Contactadd from "../components/Contactadd";
function Contact() {
  return (
    <div>
      <div
        className="mini-banner"
        style={{ backgroundImage: `url(${minibanner})` }}
      >
        <Container>
          <div className="our-breadcum">
            <h1>Contact Us</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </Container>
      </div>

      <div className="contact-map-section">
        <Container fluid>
          <div className="contact-map-main">
            <Row>
              <Col md={4}>
                <div className="contact-map-box cont-mob">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5456963989004!2d75.89003831545017!3d22.745121285094303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcfd2ac6c2f3%3A0x84bcc6d5601300ef!2sTechInfini!5e0!3m2!1sen!2sin!4v1677223351395!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                  ></iframe>
                </div>
              </Col>
              {/* ====COLUMN END======== */}
              <Col md={4}>
                <div className="contact-map-box ">
                  <div className="contacthome-form">
                    <div className="main_heading ">
                      <h2>Get in touch</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                    <Form>
                      <div className="contacthome-form-box">
                        <Row>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3 hcont-input"
                              controlId="formBasicName"
                            >
                              <Form.Control
                                type="text"
                                placeholder="First Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3 hcont-input"
                              controlId="formBasicLname"
                            >
                              <Form.Control
                                type="text"
                                placeholder="Last Name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3 hcont-input"
                              controlId="formBasicEmail"
                            >
                              <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              className="mb-3 hcont-input"
                              controlId="formBasiPhone"
                            >
                              <Form.Control type="text" placeholder="Phone" />
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group className="mb-3 hcont-input">
                              <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: "100px" }}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={3}>
                            <Button
                              className="hvr-bounce-to-right main_btn"
                              type="submit"
                            >
                              Submit
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </div>
                </div>
              </Col>
              {/* ====COLUMN END======== */}
              <Col md={4}>
                <div className="contact-map-box">
                  <img className="d-block w-100" src={av1} alt="about Img" />
                </div>
              </Col>
              {/* ====COLUMN END======== */}
            </Row>
          </div>
        </Container>
      </div>
      <div className="contadd-section mrt50 ">
        <Contactadd />
      </div>
    </div>
  );
}

export default Contact;
