import PropTypes from "prop-types";

const Error = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-primary text-center">
      <h1 className="display-1 fw-bold text-white">{props.title}</h1>
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
