import { Container } from "react-bootstrap";
import Banner from "../component/Common/Banner";
const Events = () => {
  return (
    <>
      <Banner
        className="event_banner_section"
        title="Overview of Event"
        subtitle="There’s so much to discover each week!"
      />
      <div className="events_section">
        <Container>
          <div className="event_inner">
            <div className="events_top_heading">
              <h6 className="page_intro">New events every week!</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
          <div className="event_inner_group">
            <div className="event_group">
              <div className="img_part">
                <img
                  src={require("../assets/images/blogsecond.jpg")}
                  alt="blogsecond"
                />
              </div>
              <div className="content_part">
                <a href="" className="title">
                  Romantic diner for 2 persons
                </a>
                <span>
                  <strong>Location :</strong>Antwerp
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem.
                </p>
                <a href="" className="learn_more">
                  Learn more
                </a>
              </div>
            </div>
            <div className="event_group">
              <div className="img_part">
                <img
                  src={require("../assets/images/blogsecond.jpg")}
                  alt="blogsecond"
                />
              </div>
              <div className="content_part">
                <a href="" className="title">
                  All you can eat Sushi
                </a>
                <span>
                  <strong>Location :</strong>Brussels
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem.
                </p>
                <a href="" className="learn_more">
                  Learn more
                </a>
              </div>
            </div>
            <div className="event_group">
              <div className="img_part">
                <img
                  src={require("../assets/images/blogsecond.jpg")}
                  alt="blogsecond"
                />
              </div>
              <div className="content_part">
                <a href="" className="title">
                  Trip to the Mountains of Haiae
                </a>
                <span>
                  <strong>Location :</strong>Amsterdam
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem.
                </p>
                <a href="" className="learn_more">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Events;
