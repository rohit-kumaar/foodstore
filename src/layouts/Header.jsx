import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animation } from "components/ui/animation";
import { ROUTE_PATH } from "routes/routePath";

function Header({ isAuthenticated = false }) {
  return (
    <header className="bg-white">
      <nav className="container">
        <motion.div {...animation}>
          <GiFoodTruck />
        </motion.div>

        <div>
          <Link to={`${ROUTE_PATH.default}`}>Home</Link>
          <Link to={`${ROUTE_PATH.contact}`}>Contact</Link>
          <Link to={`${ROUTE_PATH.about}`}>About</Link>
          <Link to={`${ROUTE_PATH.cart}`}>
            <FiShoppingCart />
          </Link>

          <Link
            to={
              isAuthenticated ? `${ROUTE_PATH.profile}` : `${ROUTE_PATH.login}`
            }
          >
            {isAuthenticated ? <FaUser /> : <FiLogIn />}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
