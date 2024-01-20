/* eslint-disable react/prop-types */
// importing libraries
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// importing component
import NewsCard from "../NewsCard/NewsCard";
import Error from "../Error/Error";

// importing stylesheet
import "./Hero.css";

// hero component function
const Hero = (props) => {
  // usestate hook for managing the data which is fetched from the api.
  const [data, setdata] = useState("");
  // defining the method, url, headers and data paratmeter for api
  const options = {
    method: 'GET',
    url: 'https://news-api14.p.rapidapi.com/top-headlines',
    params: {
      country: 'IN',
      language: 'en',
      pageSize: '10',
      category: `${props.category}`
    },
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_RAPIDAPI_KEY}`,
      'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
    }
  };
  // useeffect hook for calling the api so the data can be fetched
  useEffect(() => {
    const getapidata = async () => {
      props.setProgress(10);
      // try block set the connection to the api and get the response
      try {
        const response = await axios.request(options);
        props.setProgress(30);
        const newsdata = await response.data;
        props.setProgress(60);
        // updating the data by using setdata function
        setdata(newsdata);
        props.setProgress(100);
      } catch (error) {
        // catching if any error occurs
        console.log(error);
      }
    };
    // calling getapidata function using async arrow funciton
    getapidata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);
  return (
    <>
      <div className="Hero">
        {/* title below the navbar */}
        <h1>
          <span className="badge bg-primary m-auto">
            Trending {props.category} News
          </span>
        </h1>
        {/* newscard container which display all the news card */}
        <div className="NewsCardContainer row row-cols-1 row-cols-md-4 g-4">
          {/* if the result in the data is ratelimitexceeded the error component is called with rate limit exceeded please try again tomorrow  passed in the props with title property*/}
          {data?.results?.code === "RateLimitExceeded" ? (
            <Error title="Rate Limit Exceeded Please Try Again Later" />
          ) : (
            // mapping all the results that are in the data state and calling the newscard component with title, image, url and source property passed as props.
            Array.isArray(data?.articles) &&
            data?.articles?.map((element, index) => (
              <div className="col" key={index}>
                <NewsCard
                  title={element.title}
                  // if null value is returned in image and source in the json then news.png and OpenNewpaper title will displayed
                  image={element.urlToImage ? element.urlToImage : "/news.png"}
                  url={element.url}
                  source={element.publisher.name ? element.publisher.name: "OpenNewspaper"}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

// default props
Hero.defaultProps = {
  category: "All Categories",
};

// typechecking for props
Hero.propTypes = {
  category: PropTypes.string,
};

export default Hero;
