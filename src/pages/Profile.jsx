import me from "assets/rohit.jpeg";
import { motion } from "framer-motion";
import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "routes/routePath";

function Profile() {
  useTitle("FoodStore | Profile");

  const animation = {
    initial: {
      y: "-100%",
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Header />

      <main className="profile">
        <div className="container">
          <section className="profile__content">
            <motion.img
              loading="lazy"
              src={me}
              alt="Rohit Kumar"
              {...animation}
            />
            <motion.h5 {...animation} transition={{ delay: 0.3 }}>
              Rohit Kumar
            </motion.h5>

            <div>
              <motion.div {...animation} transition={{ delay: 0.5 }}>
                <Link to={`${ROUTE_PATH.adminDashboard}`} className="btn">
                  Dashboard
                </Link>
              </motion.div>

              <motion.div
                initial={{
                  x: "-100vw",
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
              >
                <Link to={`${ROUTE_PATH.myOrders}`} className="btn">
                  Orders
                </Link>
              </motion.div>

              <motion.button
                initial={{
                  x: "-100vw",
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="btn"
              >
                Logout
              </motion.button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Profile;
