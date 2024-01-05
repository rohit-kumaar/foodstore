import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";
import Loader from "layouts/Loader";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "routes/routePath";

ChartJS.register(ArcElement, Tooltip, Legend);

const loading = false;

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function AdminDashboard() {
  useTitle("FoodStore | Admin Dashboard");

  return (
    <>
      <Header />

      {loading === false ? (
        <main className="admin-dashboard">
          <div className="admin-dashboard__details">
            <section>
              <div>
                <h4>232</h4>
                <b>User</b>
              </div>
              <div>
                <h4>232</h4>
                <b>Orders</b>
              </div>
              <div>
                <h4>₹ 232</h4>
                <b>Income</b>
              </div>
            </section>

            <div className="container">
              <article>
                <div>
                  <Link to={`${ROUTE_PATH.adminOrders}`} className="btn">
                    View Orders
                  </Link>
                  <Link to={`${ROUTE_PATH.adminUsers}`} className="btn">
                    View Users
                  </Link>
                </div>

                <div>
                  <Doughnut data={data} />
                </div>
              </article>
            </div>
          </div>
        </main>
      ) : (
        <Loader />
      )}

      <Footer />
    </>
  );
}

export default AdminDashboard;
