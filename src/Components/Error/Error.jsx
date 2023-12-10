// importing library
import PropTypes from "prop-types";

// error component accept the props in which props.title is used to display the error if any occurs but i have consider only two error ie 404 page not found error and rate limit exceeded error.
const Error = (props) => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 overflow-hidden bg-primary text-center">
      <h1 className="display-1 fw-bold text-white ">{props.title}</h1>
    </div>
  );
};

// default props
Error.defaultProps = {
  title: "404 page not found!",
};

// typechecking for props
Error.propTypes = {
  title: PropTypes.string,
};

export default Error;
