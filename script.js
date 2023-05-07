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
      let news = ` <div class="col">
                    <div class="card">
                    <div class="card-header">${element['creator']}</div>
                      <img src="${element["image_url"]}" class="card-img-top"
                        alt="" />
                      <div class="card-body">
                        <h5 class="card-title">${element["title"]}</h5>
                        <p class="card-text">${element["description"]}</p>
                      </div>
                      <a href="${element['link']}" target="_blank" class="btn btn-primary">Click here to Read more</a>
                      <div class="card-footer">
                    <small class="text-body-secondary">${element["pubDate"]}</small>
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
