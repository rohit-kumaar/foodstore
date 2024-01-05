// import "../node_modules/bootstrap/scss/bootstrap.scss";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Contact from "pages/Contact";
import Cart from "pages/Cart";
import Shipping from "components/Shipping";
import ConfirmOrder from "pages/ConfirmOrder";
import PaymentSuccess from "pages/PaymentSuccess";
import Login from "pages/Login";
import Profile from "pages/Profile";
import MyOrders from "pages/MyOrders";
import OrderDetails from "pages/OrderDetails";
import AdminDashboard from "pages/admin/AdminDashboard";
import Users from "pages/admin/Users";
import Orders from "pages/admin/Orders";
import About from "pages/About";
import NotFound from "layouts/NotFound";
import { ROUTE_PATH } from "routes/routePath";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.default,
    element: <LandingPage />,
  },
  {
    path: ROUTE_PATH.contact,
    element: <Contact />,
  },
  {
    path: ROUTE_PATH.about,
    element: <About />,
  },
  {
    path: ROUTE_PATH.cart,
    element: <Cart />,
  },
  {
    path: ROUTE_PATH.shipping,
    element: <Shipping />,
  },
  {
    path: ROUTE_PATH.confirmOrder,
    element: <ConfirmOrder />,
  },
  {
    path: ROUTE_PATH.paymentSuccess,
    element: <PaymentSuccess />,
  },
  {
    path: ROUTE_PATH.login,
    element: <Login />,
  },
  {
    path: ROUTE_PATH.profile,
    element: <Profile />,
  },
  {
    path: ROUTE_PATH.myOrders,
    element: <MyOrders />,
  },
  {
    path: ROUTE_PATH.orderDetails,
    element: <OrderDetails />,
  },
  {
    path: ROUTE_PATH.adminDashboard,
    element: <AdminDashboard />,
  },
  {
    path: ROUTE_PATH.adminUsers,
    element: <Users />,
  },
  {
    path: ROUTE_PATH.adminUsers,
    element: <Orders />,
  },
  {
    path: ROUTE_PATH.notFount,
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
