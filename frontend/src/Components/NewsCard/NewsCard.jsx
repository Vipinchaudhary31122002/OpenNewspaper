/* eslint-disable react/prop-types */
const NewsCard = (props) => {
  // destructuing of props into title, image, url and source
  let { title, image, url, source } = props;
  return (
    <>
      {/* news card for the news article */}
      <div className="card h-100 text-center border-dark">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          {/* badge for displaying the source of news article */}
          <span className="badge bg-danger">
            <h6>{source}</h6>
          </span>
        </div>
        {/* image of the news article */}
        <img
          src={image}
          className="card-img-top img-thumbnail img-fluid"
          alt="Image"
          loading="eager"
          // onError attribute display the open news logo when there is certain error occurs while loading the image of the news article
          onError={({ currentTarget }) => {
            const defaultImageSrc = "/news.png";
            // Check if the current image source is the default image
            if (currentTarget.src !== defaultImageSrc) {
              // If not, set the source to the default image
              currentTarget.src = defaultImageSrc;
            }
          }}
        />
        <div className="card-body">
          {/* title of the news article in the news card */}
          <h5 className="card-title">{title}</h5>
          {/* button which takes the user to the source page where user can read the article */}
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
