import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import MyMapComponent from "../component/GoogleMap";
import {FaUser} from 'react-icons/fa';
import {IoIosCall , IoIosMail} from 'react-icons/io';
import {ImLocation} from 'react-icons/im';
import OurServices from "../component/Common/OurServices";

const Contact = () => {
  return (
    <>
      <div className="contact_form_section">
        <Container>
          <Row>
            <Col md={4}>
              <div className="contact_text">
                <h3 className="contact_title">
                  Do you have questions, or need extra information?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <div className="contact_us_form">
                <Form>
                  <Row>
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
                        <Form.Control className="input_field" placeholder="Enter your name" />
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><IoIosCall/></InputGroup.Text>
                        <Form.Control className="input_field"  placeholder="Phone number" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><IoIosMail /></InputGroup.Text>
                        <Form.Control className="input_field"  placeholder="Email Address" />
                      </InputGroup>
                    </Col>
                    <Col md={6}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"><ImLocation/></InputGroup.Text>
                        <Form.Control className="input_field"  placeholder="Location" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        style={{ resize: "none" }}
                        as="textarea"
                        rows={3}
                        placeholder="Enter Address..."
                      />
                    </Form.Group>
                  </Row>
                  <div className="button_row">
                    <button>Submit</button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact_map_section">
        <MyMapComponent isMarkerShown />
      </div>
      <OurServices />
    </>
  );
};

export default Contact;
