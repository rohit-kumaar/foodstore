import me from "assets/rohit.jpeg";
import { useTitle } from "hooks/useTitle";
import Footer from "layouts/Footer";
import Header from "layouts/Header";

function Users() {
  useTitle("FoodStore | Users");

  return (
    <>
      <Header />

      <main className="users">
        <div className="container">
          <div className="table-responsive my-orders__table">
            <table className="table table-dark table-striped table-hover table-bordered  caption-top">
              <caption>
                <h1 className="text-center">Users Details</h1>
              </caption>

              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Photo</th>
                  <th>Role</th>
                  <th>Since</th>
                </tr>
              </thead>
              <tbody className="table-light">
                <tr>
                  <td>01</td>
                  <td>Rohit</td>
                  <td>
                    <img
                      loading="lazy"
                      src={me}
                      alt="Rohit Kumar"
                      title="Rohit Kumar"
                    />
                  </td>
                  <td>Admin</td>
                  <td>10-07-2020</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Users;
