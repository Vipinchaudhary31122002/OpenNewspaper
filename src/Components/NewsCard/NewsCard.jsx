/* eslint-disable react/prop-types */
const NewsCard = (props) => {
  let { title, image, url, source } = props;
  return (
    <>
      <div className="card h-100 text-center">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge bg-danger">
            <h6>{source}</h6>
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
