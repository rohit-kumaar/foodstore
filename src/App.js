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
  {
    path: "/confirm-order",
    element: <ConfirmOrder />,
  },
  {
    path: "/payment-success",
    element: <PaymentSuccess />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/my-orders",
    element: <MyOrders />,
  },
  {
    path: "/order-details",
    element: <OrderDetails />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/users",
    element: <Users />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
