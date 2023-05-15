import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { useState } from "react";

const Header = () => {
  const [phone, setPhone] = useState(true);
  const [mail, setMail] = useState(false);
  const [location, setLocation] = useState(false);
  const handleClick = (key) => {
    switch (key) {
      case "phone":
        setPhone(true);
        setLocation(false);
        setMail(false);
        break;
      case "mail":
        setMail(true);
        setPhone(false);
        setLocation(false);
        break;
      case "location":
        setLocation(true);
        setMail(false);
        setPhone(false);
        break;
      default:
        return "";
    }
  };
  return (
    <>
      <div className="header">
        <Container>
          <div className="header-section">
            <div className="logo_area">
              <div className="logo_text">
                <Link to="/">
                <h1>Surya</h1>
                <h2 className="subtitle">Hotel & Resort</h2>
                </Link>
              </div>
            </div>
            <div className="menu_area">
              <div className="menu_top">
                <div className="telno">
                  {phone ? (
                    <>
                      <span>
                        <strong>Call on us</strong>{" "}
                        <Link to="tel:(+31) 6 40 330 222">
                          (+31) 6 40 330 222
                        </Link>
                      </span>
                    </>
                  ) : mail ? (
                    <>
                      <span>
                        <strong>Mail us at</strong>{" "}
                        <Link to="mailto: info@seasidehotel.com">
                          {" "}
                          info@seasidehotel.com
                        </Link>
                      </span>
                    </>
                  ) : location ? (
                    <>
                      <span>
                        <strong>Visit us in</strong>{" "}
                        <Link to="#">43, 293X34, Peru</Link>
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <div className="social_icon">
                  <ul>
                    <li>
                      <Link to="" className={phone ? "active" : ""}>
                        <FaPhoneAlt onClick={() => handleClick("phone")} />
                      </Link>
                    </li>
                    <li>
                      <Link to="" className={mail ? "active" : ""}>
                        <IoIosMail onClick={() => handleClick("mail")} />
                      </Link>
                    </li>
                    <li>
                      <Link to="" className={location ? "active" : ""}>
                        <ImLocation onClick={() => handleClick("location")} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu_bottom">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/hotel">Hotel</Link>
                  </li>
                  <li>
                    <Link to="/resort">Resort</Link>
                  </li>
                  <li>
                    <Link to="/rooms">Room</Link>
                  </li>
                  <li>
                    <Link to="/events">Event</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
