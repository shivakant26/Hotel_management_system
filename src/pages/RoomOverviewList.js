import { Container } from "react-bootstrap";
import Rating from "../component/Common/Rating";
import Banner from "../component/Common/Banner";
import { Link } from "react-router-dom";
import { RoomOverviewListData } from "../utils/constants";

const RoomOverviewList = () => {
  return (
    <>
      <Banner
        className="roomoverview_section"
        title="Room Overview List"
        subtitle="Standerd Room view in a list"
      />
      <div className="events_section">
        <Container>
          <div className="event_inner">
            <div className="events_top_heading">
              <h6 className="page_intro">A complete overview of our rooms</h6>
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
            {
              RoomOverviewListData?.map((item,index)=>{
                return(
                  <div className="event_group" key={index}>
              <div className="img_part">
                <img
                  src={item.image}
                  alt="blogsecond"
                />
              </div>
              <div className="content_part">
                <p className="uper_para">Discover our</p>
                <Link href={item.url} className="title">
                  {item?.title}
                </Link>
                <Rating />
                <p>{item.aboutText}</p>
                <a href="" className="learn_more">
                  Discover more
                </a>
                <span style={{ marginLeft: "10px" }}>€{item.price} / week</span>
              </div>
            </div>
                )
              })
            }
          </div>
        </Container>
      </div>
    </>
  );
};

export default RoomOverviewList;
