/* eslint-disable react/prop-types */
const NewsCard = (props) => {
  let { title, description, image, url, source } = props;
  return (
    <>
      <div className="card text-center">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge bg-danger">
            <h5>{source}</h5>
          </span>
        </div>
        <img
          src={image}
          className="card-img-top img-thumbnail img-fluid"
          alt="Image"
          loading="eager"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-outline-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
