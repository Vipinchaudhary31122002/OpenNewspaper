// importing components
import NewsCard from "./NewsCard";

// hero component function
const Hero = () => {
  return (
    <>
      <div className="Hero">
        {/* title below the navbar */}
        <h1>
          <span className="badge bg-primary m-auto">Trending News</span>
        </h1>
        <div className="NewsContainer">
          <NewsCard />
        </div>
      </div>
    </>
  );
};

export default Hero;
