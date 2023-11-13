import { useState, useEffect } from "react";
// hero component function
const Hero = () => {
  const [data, setData] = useState([]);
  let apiKey = "pub_21753915dabf06c2f3dd6fc9765ed4d9f664a";
  const updateNews = async () => {
    let response = await fetch(
      `https://newsdata.io/api/1/news?country=in&apikey=${apiKey}`
    );
    let parsedData = await response?.json();
    console.log(parsedData);
    setData(parsedData);
  };
  useEffect(() => {
    updateNews();
  });

  return (
    <>
      <div className="Hero">
        {/* title below the navbar */}
        <h1>
          <span className="badge bg-primary m-auto">Trending News</span>
        </h1>
        {/* !-- card to dispaly news --> */}
        <div
          className="row row-cols-1 row-cols-md-2 g-1 text-center"
          id="NewsCard"
        >
          {data?.results?.code ==="RatelimitExceeded"?
          console.log("ratelimitexceeded"):
          data?.results === undefined?
          console.log("loading"): 
          data?.results?.map((element, index) => {
            <div className="col" key={index}>
              <div className="card">
                <div className="card-body">
                  Api Working
                  <h5 className="card-title">${element["title"]}</h5>
                  <p className="card-text">${element["description"]}</p>
                </div>
                {/* <a href="${element["link"]}" target="_blank" className="btn btn-primary">Click here to Read more</a> */}
                <div className="card-footer">
                  <small className="text-body-secondary">
                    ${element["pubDate"]}
                  </small>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
