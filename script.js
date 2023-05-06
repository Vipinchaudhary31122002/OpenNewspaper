// Initialize the news api parameters
source = "India";
let apiKey = "f22f0eb7e00d472a8d39aeb53b97fea7";

// grab the news container
let NewsAccordian = document.getElementById("NewsCard");

// create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,
  true
);

// what to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element) {
      let news = ` <div class="col">
                    <div class="card">
                    <div class="card-header">${element.source['name']}</div>
                      <img src="${element["urlToImage"]}" class="card-img-top"
                        alt="" />
                      <div class="card-body">
                        <h5 class="card-title">${element["title"]}</h5>
                        <p class="card-text">${element["description"]}</p>
                      </div>
                      <a href="${element['url']}" target="_blank" class="btn btn-primary">Click here to Read more</a>
                      <div class="card-footer">
                    <small class="text-body-secondary">${element["publishedAt"]}</small>
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
