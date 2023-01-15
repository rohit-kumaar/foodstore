import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animation } from "components/ui/animation";

function Header({ isAuthenticated = false }) {
  return (
    <header>
      <nav>
        <motion.div {...animation}>
          <GiFoodTruck />
        </motion.div>

        <div>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">
            <FiShoppingCart />
          </Link>

          <Link to={isAuthenticated ? "/me" : "/login"}>
            {isAuthenticated ? <FaUser /> : <FiLogIn />}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
