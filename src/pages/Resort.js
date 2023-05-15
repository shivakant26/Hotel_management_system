import { Col, Container, Row } from "react-bootstrap";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Resort = () => {
  return (
    <>
      <div className="hotal_banner_section">
        <Container>
          <div className="about_text">
            <h2 className="page_title">The Resort</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet conse</p>
          </div>
        </Container>
        <div className="hotal_overlay"></div>
      </div>
      <div className="about_hotal">
        <Container>
          <div className="about_hotal_wr">
            <div className="we_offer common_layout">
              <h2>Our Luxury Tropical Resort with Pool.</h2>
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
      <div className="resort_pool">
        <Container>
          <div className="resort_pool_inner">
            <Row>
              <Col md={6}>
                <div className="services resort">
                  <div className="rating">
                    <span className="color_full_star">
                      <AiFillStar />
                    </span>
                    <span className="color_full_star">
                      <AiFillStar />
                    </span>
                    <span className="color_full_star">
                      <AiFillStar />
                    </span>
                    <span className="color_full_star">
                      <AiFillStar />
                    </span>
                    <span>
                      <AiOutlineStar />
                    </span>
                  </div>
                  <div className="service_content">
                    <h4>“The service of the staff is perfect”</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </p>
                  </div>
                  <div className="about_author">
                    <div className="author_image">
                      <img
                        src={require("../assets/images/author1.jpeg")}
                        alt=""
                      />
                    </div>
                    <div className="author_name">
                      <h5>Samantha Brown</h5>
                      <p>Netherlands</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}></Col>
            </Row>
          </div>
        </Container>
        <div className="overlay"></div>
      </div>
      <div className="resort_gallery">
        <Container>
          <div className="resort_gallery_wr">
            <Row>
              <Col md={6}>
                <Row>
                  <Col md="6" className="image_row">
                    <img
                      src={require("../assets/images/gallery1.jpeg")}
                      alt="gallery1"
                    />
                  </Col>
                  <Col md="6" className="image_row">
                    <img
                      src={require("../assets/images/gallery2.jpeg")}
                      alt="gallery2"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md="6" className="image_row">
                    <img
                      src={require("../assets/images/banner1.jpg")}
                      alt="banner1"
                    />
                  </Col>
                  <Col md="6" className="image_row">
                    <img
                      src={require("../assets/images/banner2.jpg")}
                      alt="banner2"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <div className="right_img">
                  <img
                    src={require("../assets/images/gallerybig.jpg")}
                    alt="gallerybig"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Resort;
