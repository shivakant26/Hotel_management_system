import { HiCurrencyDollar } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Container } from "react-bootstrap";

const OurServices = () => {
  return (
    <>
      <div className="our_service_section">
        <Container>
          <div className="our_service_card_wr">
            <div className="our_scard">
              <HiCurrencyDollar />
              <h6>Book now, pay later</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="our_scard">
              <IoIosMail />
              <h6>Feel safe and at ease</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="our_scard phone">
              <BsFillTelephoneFill />
              <h6>24/7 Helpdesk</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurServices;
