import { Col, Container, Row } from "react-bootstrap";
import OurServices from "../component/Common/OurServices";

const Hotel = () => {
  return (
    <>
      <div className="hotal_banner_section">
        <Container>
          <div className="about_text">
            <h2 className="page_title">About our hotel</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet conse</p>
          </div>
        </Container>
        <div className="hotal_overlay"></div>
      </div>
      <div className="about_hotal">
        <Container>
          <div className="about_hotal_wr">
            <div className="we_offer common_layout">
              <h2>
                We offer the widest range of guest rooms for you to choose from!
              </h2>
              <p className="para_gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id. Men eros elementum tristique.
              </p>
            </div>
            <div className="lorem_text common_layout">
              <p className="para_gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id. Men eros elementum tristique.
              </p>
              <p className="para_gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <a href="">read more</a>
            </div>
            <div className="usefull_link common_layout">
              <h5>Useful links:</h5>
              <ul>
                <li>
                  <a href="">About our restaurant</a>
                </li>
                <li>
                  <a href="">Customer reviews</a>
                </li>
                <li>
                  <a href="">Day trips</a>
                </li>
                <li>
                  <a href="">Events overview</a>
                </li>
                <li>
                  <a href="">Day trips</a>
                </li>
                <li>
                  <a href="">Frequently Asked Questions</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="our_popular_destination">
        <Container>
          <div className="the_popular">
            <div className="popular_overlay">
              <Row>
                <Col md={6}>
                  <div className="popular_text">
                    The popular destinations for our returning visitors
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                  <button>More about our Event</button>
                </Col>
                <Col md={6}></Col>
              </Row>
            </div>
          </div>
          <div className="overlay"></div>
        </Container>
      </div>
      <OurServices />
    </>
  );
};

export default Hotel;
