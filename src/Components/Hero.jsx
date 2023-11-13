
  // Initialize the news api parameters
  let apiKey = "pub_21753915dabf06c2f3dd6fc9765ed4d9f664a";

  // grab the news container
  let NewsAccordian = document.getElementById("NewsCard");

  // create a ajax get request
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://newsdata.io/api/1/news?country=in&apikey=${apiKey}`,
    true
  );

  // what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.results || [];
      console.log(articles);
      let newsHtml = "";
      articles.forEach(function (element) {
        let news = ` <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">${element["title"]}</h5>
                        <p className="card-text">${element["description"]}</p>
                      </div>
                      <a href="${element["link"]}" target="_blank" className="btn btn-primary">Click here to Read more</a>
                      <div className="card-footer">
                    <small className="text-body-secondary">${element["pubDate"]}</small>
                      </div>
                    </div>
                  </div>`;
        newsHtml += news;
      });
      NewsAccordian.innerHTML = newsHtml;
    } else {
      console.log("Some error occured");
    }
  };

  xhr.send();

// hero component function
const Hero = () => {
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
          {" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
