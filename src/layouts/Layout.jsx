// importing libraries
import { Home } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";

// importing stylesheet
import "./Layout.css";

const Navbar = () => {
  const navigate = useNavigate();
  // navigate to the specifiec path
  const handleLinkClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <span className="navbar-brand">OpenNews</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <Home
                  onClick={() => handleLinkClick("/")}
                  data-bs-dismiss="offcanvas"
                />
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  News Categories
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <br />
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/business")}
                  data-bs-dismiss="offcanvas"
                >
                  Business News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/technology")}
                  data-bs-dismiss="offcanvas"
                >
                  Technology News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/entertainment")}
                  data-bs-dismiss="offcanvas"
                >
                  Entertainment News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/sports")}
                  data-bs-dismiss="offcanvas"
                >
                  Sports News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/science")}
                  data-bs-dismiss="offcanvas"
                >
                  Science News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/crime")}
                  data-bs-dismiss="offcanvas"
                >
                  Crime News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/domestic")}
                  data-bs-dismiss="offcanvas"
                >
                  Domestic News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/education")}
                  data-bs-dismiss="offcanvas"
                >
                  Education News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/food")}
                  data-bs-dismiss="offcanvas"
                >
                  Food News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/health")}
                  data-bs-dismiss="offcanvas"
                >
                  Health News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/environment")}
                  data-bs-dismiss="offcanvas"
                >
                  Environment News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/politics")}
                  data-bs-dismiss="offcanvas"
                >
                  Politics News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/tourism")}
                  data-bs-dismiss="offcanvas"
                >
                  Tourism News
                </button>
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/world")}
                  data-bs-dismiss="offcanvas"
                >
                  World News
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
