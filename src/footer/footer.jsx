import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Footer() {
  const handleScrollTo = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  return (
    <>
      {/* <!-- start of footer --> */}
      <footer>
        <div className="copy-right">
          <h1>© OSICRYPTO</h1>
          <p style={{ padding: "22px 0" }}>
            Osicrypto is a user-friendly and efficient crytocurrency exchange
            platform that enable customers to instanty and seamlessly swap
            coins.
          </p>
          <p>Contact Us: support@osicrypto.com</p>
          <p style={{ paddingTop: "35px" }}>
            Copyright © 2023 <span>OSICRYPTO</span> All rights reserved
          </p>
        </div>

        <div className="Disclaimer">
          <h3 className="mb-2">Disclaimer</h3>
        </div>

        <div className="about">
          <h3 className="mb-2">About Us</h3>
        </div>

        <div className="Company">
          <h3 className="mb-2">Company</h3>
          <ul>
            <li>
              <Link onClick={handleScrollTo} to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <Link onClick={handleScrollTo} to="/privacy-policy">Privacy policy</Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <h3 className="mb-2">Social Media</h3>
          <p>
            If you to stay up-to-date with the latest news. updates, and
            promotions from our platform, be sure to follow us on social media
          </p>
          <ul>
            <li className="mr-2">
              <a href="#">
                <Icon className="fa-brands" icon="radix-icons:linkedin-logo" />
              </a>
            </li>
            <li className="mr-2">
              <a href="#">
                <Icon className="fa-brands" icon="iconoir:twitter" />
              </a>
            </li>
            <li className="mr-2">
              <a href="#">
                <Icon className="fa-brands" icon="jam:instagram" />
              </a>
            </li>
            <li className="mr-2">
              <a href="#">
                <Icon className="fa-brands" icon="akar-icons:facebook-fill" />
              </a>
            </li>
          </ul>
          <a href="#" className="a">
            Exchange
          </a>
        </div>
      </footer>

      {/* <!-- end of footer --> */}
    </>
  );
}
export default Footer;
