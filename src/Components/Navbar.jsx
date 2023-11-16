const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top ">
        <div className="container-fluid">
          <span className="navbar-brand">NewsX</span>
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
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Category of news
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
                  <button type="button" className="btn btn-primary m-1">
                    Business News
                  </button>
                  <button type="button" className="btn btn-primary m-1">
                    Technology News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Entertainment News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Sports News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Science News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Crime News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Domestic News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Education News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Food News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Health News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Environment News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Politics News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Top News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    Tourism News
                  </button>
                  <button type="button" className="btn btn-primary  m-1">
                    World News
                  </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
