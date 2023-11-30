// importing libraries
// import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// importing component
// import NewsCard from "../NewsCard/NewsCard";

// importing stylesheet
import "./Hero.css";

// hero component function
const Hero = (props) => {
  // const [data, setdata] = useState("");
  // useEffect(() => {
  //   const getapidata = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://newsdata.io/api/1/news?&apikey=${
  //           import.meta.env.VITE_REACT_APP_NEWS_API
  //         }&category=${props.category}&language=en&image=1`
  //       );
  //       const newsdata = await res.json();
  //       setdata(newsdata);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getapidata();
  // }, [props.category]);
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
          {/* {Array.isArray(data?.results) && data?.results?.map((element, index) => (
            <div className="col" key={index}>
              <NewsCard
                title={element.title}
                description={element.description}
                image={element.image_url}
              />
            </div>
          ))} */}
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
