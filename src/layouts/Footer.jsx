import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__primary" aria-label="primary-footer">
          <div className="footer__content">
            <div>
              <h2>FoodSTORE</h2>
              <div className="search-container">
                <form>
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="px-2"
                  />
                  <button className="btn btn-hover">subscribe</button>
                </form>
              </div>

              <address className="footer__contact-info">
                <h6>Contact Info</h6>

                <div className="mobile-number mt-3">
                  <Link href="tel:+91 12345 67890">+91 12345 67890</Link>
                  <span className="mx-3">|</span>
                  <Link href="tel:+91 12345 67890">+91 12345 67890</Link>
                </div>

                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>

                <div className="social-media">
                  <Link to="" title="Facebook">
                    <RiFacebookCircleFill />
                  </Link>

                  <Link to="" title="Instagram">
                    <AiFillInstagram />
                  </Link>

                  <Link to="" title="Twitter">
                    <AiFillTwitterCircle />
                  </Link>
                </div>
              </address>
            </div>

            <div className="mt-4 mt-xl-2">
              <h3>Catagories</h3>

              <ul>
                <li>
                  <Link to="">Popular</Link>
                </li>
                <li>
                  <Link to="">Chair</Link>
                </li>
                <li>
                  <Link to="">Table</Link>
                </li>
                <li>
                  <Link to="">Sofa</Link>
                </li>
                <li>
                  <Link to="">Cupboard</Link>
                </li>
                <li>
                  <Link to="">Lamp</Link>
                </li>
              </ul>
            </div>

            <div className="mt-4 mt-xl-2">
              <h3>Customer service</h3>

              <ul>
                <li>
                  <Link to="">My Account</Link>
                </li>

                <li>
                  <Link to="">Discount</Link>
                </li>

                <li>
                  <Link to="">Returns</Link>
                </li>

                <li>
                  <Link to="">Orders History</Link>
                </li>

                <li>
                  <Link to="">Order Tracking</Link>
                </li>

                <li>
                  <Link to=""></Link>
                </li>
              </ul>
            </div>

            <div className="mt-4 mt-xl-2">
              <h3>Furniture</h3>

              <ul>
                <li>
                  <Link to="">Living Room Furniture</Link>
                </li>
                <li>
                  <Link to="">Bar Furniture</Link>
                </li>
                <li>
                  <Link to="">Bedroom Furniture</Link>
                </li>
                <li>
                  <Link to="">Kids Furniture</Link>
                </li>
                <li>
                  <Link to="">Accent Furniture</Link>
                </li>
                <li>
                  <Link to="">Book Shelves</Link>
                </li>
              </ul>
            </div>

            <div className="mt-4 mt-xl-2">
              <h3>Useful links</h3>

              <ul>
                <li>
                  <Link to="">Promotions</Link>
                </li>
                <li>
                  <Link to="">Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__secondary" aria-label="secondary-footer">
        ©FoodSTORE - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
