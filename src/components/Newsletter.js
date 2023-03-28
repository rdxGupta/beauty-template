import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
function Newsletter() {
  return (
    <div>
      <div className="main-newsletter pdtop50">
        <Container>
          <div className="newsletter-box">
            <Row className="justify-content-center">
              <Col md={5}>
                <div className="main_heading">
                  <h2>Sign up now</h2>
                  <p>
                    Subscribe to our emails (they’re super fun, promise) and get
                    15% off your first online order
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={6}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your email address"
                    />
                  </Form.Group>

                  <Button
                    className="hvr-bounce-to-right main_btn"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Newsletter;
