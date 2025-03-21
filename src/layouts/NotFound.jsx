import { useTitle } from "hooks/useTitle";
import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "routes/routePath";

function NotFound() {
  useTitle("Page Not Found");
  return (
    <>
      <main className="not-found">
        <div>
          <MdError />
          <h1>404</h1>
        </div>

        <p>Page Not Found, Click below to go to home page</p>

        <Link to={`${ROUTE_PATH.default}`} className="btn">Go to home</Link>
      </main>
    </>
  );
}

export default NotFound;
