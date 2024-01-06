import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Founder from "../components/Founder";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import { loadUser } from "redux/actions/user";

function Home() {
  useTitle("FoodStore | Home");

  const { error, message, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);

      dispatch({
        type: "clearError",
      });
    }

    if (message) {
      toast.error(message);

      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error, message]);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />

      <main>
        <Hero />
        <Founder />
        <Menu />
      </main>

      <Footer />

      <Toaster />
    </>
  );
}

export default Home;
