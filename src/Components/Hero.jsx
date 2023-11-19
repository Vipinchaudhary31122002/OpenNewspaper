import { useEffect } from "react";
import PropTypes from "prop-types";
// importing components
import NewsCard from "./NewsCard";

// hero component function
const Hero = (props) => {
  const getapidata = async () => {
    try {
      const res = await fetch(
        `https://newsdata.io/api/1/news?&apikey=${import.meta.env.VITE_REACT_APP_NEWS_API}&category=technology&language=en&image=1`
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getapidata();
  }, []);
  return (
    <>
      <div className="Hero">
        {/* title below the navbar */}
        <h1>
          <span className="badge bg-primary m-auto">{props.title}</span>
        </h1>
        <div className="NewsCardContainer row row-cols-1 row-cols-md-2 g-4">
          <NewsCard />
        </div>
      </div>
    </>
  );
};

Hero.defaultProps = {
  country: "Trending",
};

Hero.propTypes = {
  title: PropTypes.string,
};

export default Hero;
