// import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Contact from "pages/Contact";
import Cart from "pages/Cart";
import Shipping from "components/Shipping";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/shipping",
    element: <Shipping />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
