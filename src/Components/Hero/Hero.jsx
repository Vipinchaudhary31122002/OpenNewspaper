import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import NewsCard from "../NewsCard/NewsCard";
import Error from "../Error/Error";
import "./Hero.css";

const Hero = (props) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://news-api14.p.rapidapi.com/top-headlines",
    params: {
      country: "IN",
      language: "en",
      pageSize: "10",
      category: `${props.category}`,
    },
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_RAPIDAPI_KEY}`,
      "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true when fetching data
      try {
        const response = await axios.request(options);
        const newsdata = await response.data;
        setData(newsdata);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); // Set loading state to false after data fetching is complete
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);

  return (
    <>
      {isLoading ? (
        <>
          <CircularProgress className="CircularLoader" />
        </>
      ) : (
        <div className="Hero">
          <h1>
            <span className="badge bg-primary m-auto">
              Trending {props.category} News
            </span>
          </h1>
          <div className="NewsCardContainer row row-cols-1 row-cols-md-4 g-4">
            {data?.results?.code === "RateLimitExceeded" ? (
              <Error title="Rate Limit Exceeded Please Try Again Later" />
            ) : (
              Array.isArray(data?.articles) &&
              data?.articles?.map((element, index) => (
                <div className="col" key={index}>
                  <NewsCard
                    title={element.title}
                    image={
                      element.urlToImage ? element.urlToImage : "/news.png"
                    }
                    url={element.url}
                    source={
                      element.publisher.name
                        ? element.publisher.name
                        : "OpenNewspaper"
                    }
                  />
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

Hero.defaultProps = {
  category: "All Categories",
};

Hero.propTypes = {
  category: PropTypes.string,
};

export default Hero;
