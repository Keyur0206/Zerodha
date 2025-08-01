import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="container text-center mt-5 mb-5 p-5">
        <div className="mt-6">
          <h1 className="fs-2 mt-6 mb-6">404 Page Not Found</h1>
          <p className="mt-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
           <Link to="/"
            className="btn btn-primary p-2 mt-3 fs-6"
            style={{ width: "15%", margin: "0 auto" }}
          >
           
            Back To home
            </Link>
          
        </div>
      </div>
    </>
  );
}

export { NotFound };
