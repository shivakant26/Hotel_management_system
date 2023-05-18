import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  contactMenuItem,
  followUsArray,
  informationMenuItem,
  popularMenuItem,
} from "../../utils/constants";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="footer_top">
          <Container>
            <div className="footer_wr">
              <div className="contact_us common_list">
                <h4>contact us</h4>
                <ul>
                  {contactMenuItem?.map((contactItem, index) => {
                    return (
                      <li key={index}>
                        <span className="icon_svg">{contactItem.icon}</span>
                        <Link to={contactItem.linkUrl}>
                          {contactItem.linkName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="follow_us common_list">
                <h4>follow us</h4>
                <ul>
                  {followUsArray?.map((menuItem, index) => {
                    return (
                      <>
                        <li key={index}>
                          <span className="icon_svg">{menuItem.icon}</span>
                          <Link to={menuItem.linkUrl}>{menuItem.linkName}</Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              <div className="popular common_list">
                <h4>popular</h4>
                <ul>
                  {popularMenuItem?.map((popularItem, index) => {
                    return (
                      <li key={index}>
                        <Link to={popularItem.linkUrl}>
                          {popularItem.linkName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="information common_list">
                <h4>information</h4>
                <ul>
                  {informationMenuItem?.map((infoItem, index) => {
                    return (
                      <li key={index}>
                        <Link to={infoItem.linkUrl}>{infoItem.linkName}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div className="footer_bottom">
          <Container>
            <div className="footer_btm">
              <div className="copyright">
                <p>
                  Copyright © <a href="">shivakant</a>
                </p>
              </div>
              <div className="poweredby">
                <p>
                  Powered by <Link to="/">surya hotel</Link>
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
