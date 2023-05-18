import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Col, Container, Row } from "react-bootstrap";
import { BsCheckAll } from "react-icons/bs";
import SliderLeft from "../component/Home/SliderLeft";
import SliderRight from "../component/Home/SliderRight";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import OurServices from "../component/Common/OurServices";

const Home = () => {
  return (
    <>
      <div className="banner_section">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, EffectFade]}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          className="mySwiper innerPgtestimonials"
        >
          <SwiperSlide>
            <div className="slider_one">
              <Container>
                <div className="slider_text">
                  <div className="a_glorious">
                    A gorgeous and relaxing pool next to your room
                  </div>
                  <br />
                  <a href="" className="more_about">
                    More about our accommodations
                  </a>
                </div>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_two">
              <Container>
                <div className="slider_text">
                  <div className="a_glorious">
                    A gorgeous and relaxing pool next to your room
                  </div>
                  <br />
                  <a href="" className="more_about">
                    More about our accommodations
                  </a>
                </div>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider_three">
              <Container>
                <div className="slider_text">
                  <div className="a_glorious">
                    A gorgeous and relaxing pool next to your room
                  </div>
                  <br />
                  <a href="" className="more_about">
                    More about our accommodations
                  </a>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hero_form_section">
        <Container>
          <div className="hero_form">
            <div className="column1">
              <span className="span_text">
                <BsCheckAll />
                21 years experience
              </span>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="column2">
              <span className="span_text">
                <BsCheckAll />1 million visitors since 2014
              </span>
              <input type="text" placeholder="Email address" />
            </div>
            <div className="column3">
              <span className="span_text">
                <BsCheckAll />
                Overall rating of 8.5
              </span>
              <input type="text" placeholder="phone number" />
            </div>
            <div className="column4">
              <span className="span_text">
                <BsCheckAll />
                10.000+ positive reviews
              </span>
              <button className="subs_btn">Subscribe to Updates</button>
            </div>
          </div>
        </Container>
      </div>
      <div className="wf_section">
        <Container>
          <Row>
            <Col md={8}>
              <SliderLeft />
            </Col>
            <Col md={4}>
              <SliderRight />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blog_section">
        <Container>
          <div className="blog_card_wr">
            <div className="blog_card">
              <img
                src={require("../assets/images/blogfirst.jpg")}
                alt="blog_first"
              />
              <div className="blog_text">
                <h3>Book great adventureas!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit.
                  Suspendisse varius enim.
                </p>
              </div>

              <div className="blog_card_overlay"></div>
            </div>
            <div className="blog_card">
              <img
                src={require("../assets/images/blogsecond.jpg")}
                alt="blog_second"
              />
              <div className="blog_text">
                <h3>Book great adventureas!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consecetur adipiscing elit.
                  Suspendisse varius enim.
                </p>
              </div>
              <div className="blog_card_overlay"></div>
            </div>
          </div>
        </Container>
      </div>
      <div className="service_section">
        <Container>
          <div className="service_wr">
            <div className="services">
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
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
              <div className="about_author">
                <div className="author_image">
                  <img src={require("../assets/images/author1.jpeg")} alt="" />
                </div>
                <div className="author_name">
                  <h5>Samantha Brown</h5>
                  <p>Netherlands</p>
                </div>
              </div>
            </div>
            <div className="services">
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
                <span>
                  <AiOutlineStar />
                </span>
                <span>
                  <AiOutlineStar />
                </span>
              </div>
              <div className="service_content">
                <h4>“It was a great pleasure to stay here”</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
              <div className="about_author">
                <div className="author_image">
                  <img src={require("../assets/images/author2.jpeg")} alt="" />
                </div>
                <div className="author_name">
                  <h5>Samantha Brown</h5>
                  <p>Netherlands</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className="service_overlay"></div>
      </div>
      <OurServices />
    </>
  );
};

export default Home;
