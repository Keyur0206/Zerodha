import { Logo } from "../Picture/data";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom p-3 position-fixed top-0 w-100 " style={{backgroundColor:"#FBFBFB"}}>
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src={Logo} style={{ width: "8rem" }} alt="Logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
         
          <div class="collapse navbar-collapse  " id="navbarNav">
            <div className="row ms-5 me-5">  </div>
            <div className="row ms-5 me-5">  </div>
            <div className="row ms-5 me-5">  </div>
            
            <ul class="navbar-nav ">
              <li class="nav-item me-5">
                <Link class="nav-link "  to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link class="nav-link" to="/pricing" >
                  Pricing
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link class="nav-link" to="/support" >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
