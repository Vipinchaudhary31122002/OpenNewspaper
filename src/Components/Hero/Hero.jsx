/* eslint-disable react/prop-types */
// importing libraries
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// importing component
import NewsCard from "../NewsCard/NewsCard";
import Error from "../Error/Error";

// importing stylesheet
import "./Hero.css";

// hero component function
const Hero = (props) => {
  const [data, setdata] = useState("");

  useEffect(() => {
    const getapidata = async () => {
      props.setProgress(10);
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?&apikey=${
            import.meta.env.VITE_REACT_APP_NEWS_API
          }&category=${props.category}&language=en&country=in&full_content=1`
        );
        props.setProgress(30);
        const newsdata = await res.json();
        props.setProgress(70);
        setdata(newsdata);
        props.setProgress(100);
      } catch (error) {
        console.log(error);
      }
    };
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
        <div className="NewsCardContainer row row-cols-1 row-cols-md-2 g-4">
          {data?.results?.code === "RateLimitExceeded" ? (
            <Error />
          ) : (
            Array.isArray(data?.results) &&
            data?.results?.map((element, index) => (
              <div className="col" key={index}>
                <NewsCard
                  title={element.title}
                  description={
                    element.description
                      ? element.description.slice(0, 200) + "..."
                      : ""
                  }
                  image={element.image_url ? element.image_url : "news.png"}
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
