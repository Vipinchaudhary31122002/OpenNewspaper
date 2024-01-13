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

// defining the method, url, headers and data paratmeter for api
const options = {
  method: "POST",
  url: "https://newsnow.p.rapidapi.com/newsv2",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": import.meta.env.API_KEY,
    "X-RapidAPI-Host": "newsnow.p.rapidapi.com",
  },
  data: {
    query: "AI",
    page: 1,
    time_bounded: true,
    from_date: "01/02/2021",
    to_date: "05/06/2021",
    location: "",
    category: "",
    source: "",
  },
};

// hero component function
const Hero = (props) => {
  // usestate hook for managing the data which is fetched from the api.
  const [data, setdata] = useState("");
  // useeffect hook for calling the api so the data can be fetched
  useEffect(() => {
    const getapidata = async () => {
      props.setProgress(10);
      // try block set the connection to the api and get the response
      try {
        const response = await axios.request(options);
        console.log(response.data);
        props.setProgress(30);
        // setting the response in the json formart in newsdata variable
        const newsdata = await response.data;
        // console.log(newsdata);
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
            Array.isArray(data?.items) &&
            data?.items?.map((element, index) => (
              <div className="col" key={index}>
                <NewsCard
                  title={element.title}
                  // if null value is returned in image in the json then news.png will displayed
                  image={element.images ? element.image : "/news.png"}
                  url={element.url}
                  source={element.source_id}
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
  category: "Top",
};

// typechecking for props
Hero.propTypes = {
  category: PropTypes.string,
};

export default Hero;
