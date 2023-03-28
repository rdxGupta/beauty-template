import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import c1 from "../assets/images/about/contact-bg.jpg";
function Contacthome() {
  return (
    <div>
      <div className="home-contact mrb50">
        <Container>
          <div className="home-contact-main">
            <Row className="justify-content-center">
              <Col md={4}>
                <div className="home-contect-img">
                  <img className="d-block w-100" src={c1} alt="Contact Img" />
                </div>
              </Col>
              <Col md={8}>
                <div className="home-contact-form">
                  <div className="main_heading ">
                    <h2>Request a Call Back</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                  </div>
                  <div className="contacthome-form">
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
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contacthome;
