import { Container } from "react-bootstrap";
import {GrFacebookOption , GrTwitter} from "react-icons/gr";
import { TfiYoutube , TfiGoogle} from "react-icons/tfi";
import {AiFillLinkedin} from 'react-icons/ai';
import {RiPhoneFill} from "react-icons/ri";
import {IoIosMail} from "react-icons/io";
import {MdOutlineFax , MdStreetview} from "react-icons/md";
import {TbWorld} from "react-icons/tb";

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
                <li>
                    <span className="icon_svg"><RiPhoneFill/></span>
                  <a href="">(+31) 6 40 330 222</a>
                </li>
                <li>
                    <span className="icon_svg"><IoIosMail/></span>
                  <a href="">info@seasidehotel.com</a>
                </li>
                <li>
                    <span className="icon_svg"><MdOutlineFax/></span>
                  <a href="">(+31) 6 40 330 223</a>
                </li>
                <li>
                    <span className="icon_svg"><MdStreetview /></span>
                  <a href="">Downside street 43</a>
                </li>
                <li>
                    <span className="icon_svg"><TbWorld/></span>
                  <a href="">Peru</a>
                </li>
              </ul>
            </div>
            <div className="follow_us common_list">
                <h4>follow us</h4>
              <ul>
                <li>
                    <span className="icon_svg"><GrFacebookOption/> </span>
                  <a href="">Facebook</a>
                </li>
                <li>
                    <span className="icon_svg"><GrTwitter /></span>
                  <a href="">Twitter</a>
                </li>
                <li>
                    <span className="icon_svg"><TfiYoutube/></span>
                  <a href="">YouTube</a>
                </li>
                <li>
                    <span className="icon_svg"><TfiGoogle /></span>
                  <a href="">GooglePlus</a>
                </li>
                <li>
                    <span className="icon_svg"><AiFillLinkedin /></span>
                  <a href="">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="popular common_list">
                <h4>popular</h4>
              <ul>
                <li>
                  <a href="">Belgium</a>
                </li>
                <li>
                  <a href="">Amsterdam</a>
                </li>
                <li>
                  <a href="">Munich</a>
                </li>
                <li>
                  <a href="">East-Asia</a>
                </li>
                <li>
                  <a href="">Ulaanbaatar</a>
                </li>
                <li>
                  <a href="">North America</a>
                </li>
              </ul>
            </div>
            <div className="information common_list">
                <h4>information</h4>
              <ul>
                <li>
                  <a href="">Frequently Asked Questions</a>
                </li>
                <li>
                  <a href="">Information about us</a>
                </li>
                <li>
                  <a href="">Seaside Hotel</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">Sitemap</a>
                </li>
                <li>
                  <a href="">Last minutes</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        </div>
        <div className="footer_bottom">
            <Container>
                <div className="footer_btm">
                    <div className="copyright">
                        <p>Copyright © <a href="">shivakant</a></p>
                    </div>
                    <div className="poweredby">
                        <p>Powered by <a href="">surya hotel</a></p>
                    </div>
                </div>
            </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
