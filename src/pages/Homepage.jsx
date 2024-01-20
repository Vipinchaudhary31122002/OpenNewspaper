// importing libraries
import { Home } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  // useNavigate hook used to navigate bw the nested routes
  const navigate = useNavigate();
  // navigate to the specifiec path
  const handleLinkClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <div>
        {/* offcanvas navbar */}
        <nav className="navbar navbar-dark bg-dark bg-bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand">
              <img
                src="/news.png"
                alt="logo"
                width="30"
                height="24"
                className="d-inline-block align-text-top"
              />
              <span className="m-1">OpenNewspaper</span>
            </span>
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
              {/* Home icon which takes the user to the home page of web application */}
              <div className="offcanvas-header">
                <Home
                  onClick={() => handleLinkClick("/")}
                  data-bs-dismiss="offcanvas"
                  cursor="pointer"
                />
                {/* offcanvas navbar title */}
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  News Categories
                </h5>
                {/* offcanvas navbar close button */}
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <br />
                {/* button which takes the user to the business page */}
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/business")}
                  data-bs-dismiss="offcanvas"
                >
                  Business News
                </button>
                {/* button which takes the user to the technology page */}
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/technology")}
                  data-bs-dismiss="offcanvas"
                >
                  Technology News
                </button>
                {/* button which takes the user to the entertainment page */}
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/entertainment")}
                  data-bs-dismiss="offcanvas"
                >
                  Entertainment News
                </button>
                {/* button which takes the user to the sports page */}

                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/sports")}
                  data-bs-dismiss="offcanvas"
                >
                  Sports News
                </button>
                {/* button which takes the user to the science page */}
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/science")}
                  data-bs-dismiss="offcanvas"
                >
                  Science News
                </button>
                {/* button which takes the user to the health page */}
                <button
                  className="btn btn-primary m-2"
                  onClick={() => handleLinkClick("/health")}
                  data-bs-dismiss="offcanvas"
                >
                  Health News
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* outlet element of react router dom library which renders all the nested component here */}
      <Outlet />
    </>
  );
};

export default Navbar;
