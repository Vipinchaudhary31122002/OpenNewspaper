/* eslint-disable react/prop-types */
const NewsCard = (props) => {
  let { title, description, image } = props;
  return (
    <>
      {/* <div className="col" key={key}> */}
      <div className="card">
        <img src={image} className="card-img-top" height="300" width="200" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default NewsCard;
